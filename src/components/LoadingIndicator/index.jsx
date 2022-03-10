import { Image } from '@chakra-ui/react';
import Loader from './indicator.svg';

const LoadingIndicator = () =>  {
    return (
        <Image src={Loader} alt='Loading ...' width={150} m={5} />
    )
}

export default LoadingIndicator;