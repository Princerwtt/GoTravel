import './style.css'
import React, { useState } from "react";
import { useAuth0 } from '@auth0/auth0-react';


const Profile = () => {
  const { user } = useAuth0();
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [editing, setEditing] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  // const handleInputChange = (event) => {
  //   if (!submitted && !editing) {
  //     setName(event.target.value);
  //   }
  // };

  // const handleInputChange2 = (event) => {
  //   if (!submitted && !editing) {
  //     setEmail(event.target.value);
  //   }
  // };

  const handleInputChange3 = (event) => {
    if (!submitted && !editing) {
      setAddress(event.target.value);
    }
  };

  const handleInputChange4 = (event) => {
    if (!submitted && !editing) {
      setAge(event.target.value);
    }
  };

  const handleEdit = () => {
    setSubmitted(false);
    setEditing(true);
  };


  return (
    <div className="container">
      <div className="profile">
        <div className="profileCard">
          {/* <img
            src="https://i0.wp.com/www.worth.com/wp-content/uploads/2022/04/img_avatar.png?fit=499%2C498&ssl=1"
            className="profileimage"
            alt="Avatar"
          /> */}
          {user && <img src={user.picture} alt="User Profile" />}
          {/* <h2>Shivam Kumar</h2> */}
          {user && <div>{user.name}</div>}
          <p>
            Personal Profile <br />
          </p>
          <div>
            <button className="button">Follow</button>
            <button className="button2">Message</button>
          </div>
        </div>
      </div>
      <div className="formNew">
        <div className="formContent">
          <div className="formInput">
            <p>Full Name:</p>
            <div className="inputcss">
              <form onSubmit={handleSubmit}>
                {/* <input
                  type="text"
                  value={name}
                  onChange={handleInputChange}
                  disabled={submitted && !editing}
                  placeholder="name"
                /> */}
                {user && <div>{user.name}</div>}
                {console.log(user)}
              </form>
            </div>
          </div>
          <br />
          <div className="formInput">
            <p>Email Id:</p>
            <div className="inputcss">
              <form onSubmit={handleSubmit}>
                {/* <input
                  type="email"
                  value={email}
                  onChange={handleInputChange2}
                  disabled={submitted && !editing}
                  placeholder="email"
                /> */}
                {user && <div>{user.email}</div>}
              </form>
            </div>
          </div>
          <br />
          <div className="formInput">
            <p>DOB:</p>
            <div className="inputcss">
              <form onSubmit={handleSubmit}>
                <label htmlFor="age"></label>
                <input
                  type="date"
                  id="age"
                  name="age"
                  value={age}
                  onChange={handleInputChange4}
                  disabled={submitted && !editing}
                />
              </form>
            </div>
          </div>
          <br />
          <br />
          <div className="formInput">
            <p>Gender:</p>
            <div className="inputcss">
              <form onSubmit={handleSubmit}>
                <label htmlFor="gender"></label>
                <select id="gender" name="gender" disabled={submitted}>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </form>
            </div>
          </div>
          <br />
          <br />
          <div className="formInput">
            <p>Address:</p>
            <div className="inputcss"></div>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                value={address}
                onChange={handleInputChange3}
                disabled={submitted && !editing}
                placeholder="address"
              />
            </form>
          </div>
          <br />
          <div className='submitButton'>
          <button
            className="button"
            type="submit"
            onClick={handleSubmit}
            disabled={submitted}
          >
            Submit
          </button>
          
          {submitted && (
            <button onClick={handleEdit} className="button">
              Edit
            </button>
          )}
        </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

// {isAuthenticated ? (
//     <div className='pages-name'>
//       {/* Display user name if authenticated */}
//       <div>{'Welcome ' + user.name}</div>
      
//       <button className='dropdown-button' onClick={toggleDropdown}>
//         More
//       </button>
//       {showDropdown && (
//         <div className='dropdown-menu'>
//           <Link to='/profile' id='pages-name' className='dropdown-item'>
//             Profile
//           </Link>
//           <button className='dropdown-item' onClick={() => logout({ returnTo: window.location.origin })}>
//             Log Out
//           </button>
//         </div>
//       )}
//     </div>
//   ) : (
//     <div className='pages-name'>
//       {/* Login button */}
//       <button className='login-button' onClick={() => loginWithRedirect()}>
//         Log In
//       </button>
//     </div>
//   )}