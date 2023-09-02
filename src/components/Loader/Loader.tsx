import { FallingLines } from 'react-loader-spinner';

import { DivloaderContainer } from '../Styled-Components/Styled-Components.styled';
export function Loader() {
  return (
    <DivloaderContainer>
      <FallingLines color="#8C8C8C" width="100" visible={true} />
    </DivloaderContainer>
  );
}
