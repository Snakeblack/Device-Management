import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";

@Injectable({
    providedIn: "root",
})
export class DispositivoService {

    dispositivosCollection;
    dispositivos;
    dispositivoDoc;

    constructor(db: AngularFirestore) {}
}
