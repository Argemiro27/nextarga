import {useRouter} from "next/router";
import { useEffect, useState } from "react";
import {Header, Loading} from "../components"
import {apiNoticia,apiTime} from "../api/data";
import {INoticia} from "../interfaces/Noticia.Interface";
import {Table} from "../styles";
import {ITime} from "../interfaces/Time.Interface";

export default function Id() {
  const [IsLoading, setIsLoading] = useState(true);
  const [noticia, setNoticia] = useState<INoticia[]>([]);
  const [time, setTime] = useState<ITime[]>([]);
  const router = useRouter();

  useEffect(()=>{
    const fetchData = async () => {
        try{
            const response = await apiNoticia.show(router.query.id as string);
            setNoticia(response.data);
            const responsedois = await apiTime.index();
            setTime(responsedois.data);
        }catch(error){

        }finally{
            setIsLoading(false);
        }
        setIsLoading(false);
      };
      fetchData();
  },[router.query.id]);
  return (
    <>
        {IsLoading ? (  
            <Loading /> 
        ) : (
            <>
                <Header />
                <div className="container">
                    <Table>
                        <thead>
                            <tr>
                                <th>Título</th>
                                <th>Descrição</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                time && time.map((item)=>(
                                    <tr key={item.id}>
                                        <td>{item.nome}</td>
                                        <td>{item.descricao}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </Table>
                </div>
            </>
        )}
    </>
  );
}
