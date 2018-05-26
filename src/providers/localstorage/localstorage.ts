import { Injectable } from "@angular/core";
import { SQLite, SQLiteObject } from "@ionic-native/sqlite";

@Injectable()
export class LocalstorageProvider {
  constructor(private sqlite: SQLite) {}

  private configTable: Array<Object> = [
    {
      table:
        "user(id INTEGER, created VARCHAR(100), ttl INTEGER, userId INTEGER)"
    },
    {
      table:
        "securitySite(id INTEGER, email VARCHAR(225), emailVerified VARCHAR(225), username VARCHAR(225), name VARCHAR(225), phone INTEGER, realm VARCHAR(225))"
    },
    {
      table:
        "site(id INTEGER, district_id INTEGER, discobj_id INTEGER, label VARCHAR(225), address VARCHAR(225), zoom INTEGER, latitude VARCHAR(225), longitude VARCHAR(225))"
    },
    {
      table:
        "securitySites(id INTEGER, security_id INTEGER, site_id INTEGER)"
    }
  ];

  public createDatabase(): void {
    this.sqlite
      .create({
        name: "amsdb.db",
        location: "default"
      })
      .then((db: SQLiteObject) => {
        for (let i of this.configTable) {
          db.executeSql(`CREATE TABLE IF NOT EXISTS ${i["table"]}`, [])
            .then(resultCreate => {

            })
            .catch(err => {
              console.log(err);
            });
        }
      });
  }

  public get(tableName: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.sqlite
        .create({
          name: "amsdb.db",
          location: "default"
        })
        .then((db: SQLiteObject) => {
          db
            .executeSql(`SELECT * FROM ${tableName}`, [])
            .then(result => {
              let value: Array<Object> = [];
              for (let i = 0; i < result.rows.length; i++) {
                value.push(result.rows.item(i));
              }
              resolve(value);
            })
            .catch(err => {
              reject(err);
            });
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  public insert(tableName: string, value: Object, incrementId: boolean): Promise<any> {
    return new Promise((resolve, reject) => {
      this.sqlite
        .create({
          name: "amsdb.db",
          location: "default"
        })
        .then((db: SQLiteObject) => {
          let objectKeys: Array<string> = Object.keys(value);
          let valuesInsert: Array<any> = [];
          let descValues: string = "";

          for (let i = 0; i < objectKeys.length; i++) {
            valuesInsert.push(value[objectKeys[i]]);
            if (i == objectKeys.length - 1) {
              break;
            }
            descValues += "?, ";
          }
          descValues += "?";
          let values: string;
          if (incrementId) {
            values = `VALUES(NULL, ${descValues})`;
          } else {
            values = `VALUES(${descValues})`;
          }

          db
            .executeSql(`INSERT INTO ${tableName} ${values}`, valuesInsert)
            .then(result => {
              resolve(result);
            })
            .catch(err => {
              reject(err);
            });
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  public delete(tableName: string, param: Object): Promise<Object> {
    return new Promise((resolve, reject) => {
      this.sqlite
        .create({
          name: "amsdb.db",
          location: "default"
        })
        .then((db: SQLiteObject) => {
          let propertyId = Object.keys(param);
          db
            .executeSql(
              `DELETE FROM ${tableName} WHERE ${propertyId[0] + "=?"}`,
              [param[propertyId[0]]]
            )
            .then(result => {
              resolve(result);
            })
            .catch(err => {
              reject(err);
            });
        })
        .catch(err => {
          reject(err);
        });
    });
  }
}
