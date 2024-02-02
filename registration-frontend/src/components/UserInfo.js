import Navbar from "./Navbar";
import { useNavigate } from 'react-router-dom';
import { FaArrowCircleLeft } from 'react-icons/fa';

function UserInfo({ loggedInUsername }) {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/search');
  };

  return (
    <>
      <Navbar title={'User Information'} loggedInUsername={loggedInUsername} />
      <p onClick={handleBackClick}> <FaArrowCircleLeft size={24} color="#ff4500" /> </p>
    </>

  );
}

export default UserInfo;
