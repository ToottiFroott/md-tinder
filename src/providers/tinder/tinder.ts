import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import PouchDB from 'pouchdb';

@Injectable()
export class TinderProvider {

  public pdb;
  public pdb2;
  public remote;
  public remote2;
  tinUsers;

  createPouchDB() {
    this.pdb = new PouchDB('tin_users');
    this.pdb2 = new PouchDB('conversations');
    this.remote = 'http://admin:admin@localhost:5984/tin_users';
    this.remote2 = 'http://admin:admin@localhost:5984/conversations';

    let options = {
      live: true,
      retry: true,
      continuous: true
    };

    this.pdb.sync(this.remote, options);
    this.pdb2.sync(this.remote2, options);
  }

  create(user) {
    return this.pdb.post(user);
  }

  createConv(conversation) {
    return this.pdb2.post(conversation);
  }

  update(user) {
    return this.pdb.put(user, {force:true});
  }

  updateConv(conversation) {
    return this.pdb2.put(conversation);
  }

  delete(user) {
    return this.pdb.remove(user);
  }

  deleteConv(conversation) {
    return this.pdb2.remove(conversation);
  }

  read() {
    let pdb = this.pdb;

    function allDocs() {
      let _tinUsers = pdb.allDocs({ include_docs: true, attachments: true })
        .then(docs => {
          return docs.rows;
        });

      return Promise.resolve(_tinUsers);
    };
    return allDocs();
  }

  readConv() {
    let pdb2 = this.pdb2;

    function allDocs() {
      let _conversations = pdb2.allDocs({ include_docs: true, attachments: true })
        .then(docs => {
          return docs.rows;
        });

      return Promise.resolve(_conversations);
    };
    return allDocs();
  }
}
