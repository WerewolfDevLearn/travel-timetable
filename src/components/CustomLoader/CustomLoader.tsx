import LoaderLayer01 from './Layes/Layer_01';
import LoaderLayer02 from './Layes/Layer_02';
import LoaderLayer03 from './Layes/Layer_03';
import LoaderLayer04 from './Layes/Layer_04';

export default function CustomLoader() {
  return (
    <div className="loaderContainer">
      <LoaderLayer01 />
      <LoaderLayer02 />
      <LoaderLayer03 />
      <LoaderLayer04 />
    </div>
  );
}
