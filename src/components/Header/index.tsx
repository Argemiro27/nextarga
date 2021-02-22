import {useEffect, useState} from "react";
import {FaHome} from "react-icons/fa";
import { useRouter } from "next/router";
import { apiTime } from "../../api/data";
import {ITime} from "../../interfaces/Time.Interface";
import {Link} from "../../styles";
import {Container} from "./styles";


const Header = () => {
    const router = useRouter();
    const [times,setTimes] = useState<ITime[]>([]);

    useEffect(() => {
        const fetchData = async () => {
          const response = await apiTime.index();
          setTimes(response.data);
        };
        fetchData();
      }, []);

    return (
        <Container className="container">
            <FaHome onClick={() => router.push("/")} />
            {times && times.map((item)=>(
                <Link key={item.id} href={`${item.id}`}>
                    {item.nome}
                </Link>
            ))}
        </Container>
    );
}

export default Header;