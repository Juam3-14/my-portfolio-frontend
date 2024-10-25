import Image from 'next/image';
import cualcito from '../public/resources/example.jpg'; // Ruta desde la carpeta public

const StaticImage = () => (
    <div>
        <Image
            src={cualcito}
            alt="Besto doggo ever"
            width={500}
            height={300}
            unoptimized // Desactiva la optimización
        />
    </div>
);

export default StaticImage;
