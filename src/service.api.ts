import { HttpClient, HttpHeaders } from '@angular/common/http';
import axios from 'axios';

export class ServerAPI{
    public async getList(){
        let rec = await axios.get("http://localhost:63949/api/Test/Get");
        return rec.data;
    }

    async saveAdd(name: any){
        let rec = await axios.post("http://localhost:63949/api/Test/Post", {
            value: name
        });
        return rec.data;
    }
}