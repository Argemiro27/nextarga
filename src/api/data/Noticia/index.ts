import api from "../../index";
import {INoticia} from "../../../interfaces/Noticia.Interface";

class NoticiaData{
    show(NoticiaId: string){
        return api.get<INoticia[]>('noticia/s{NoticiaId}');
    }
}

export default new NoticiaData;