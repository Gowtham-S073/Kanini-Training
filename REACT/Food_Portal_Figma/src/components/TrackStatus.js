// import React, { useState, useContext} from 'react';
// import styles from '../Css/TrackStatus.module.css';
// import { useNavigate } from 'react-router-dom';
// import { AppContext } from "../App";


// function TrackStatus(){

//   const {trackid, setTrackid } = useContext(AppContext);

//   const [checktrackid, setChecktrackid] = useState({
//     idInt: 0,
//     idString: '',
//   });


//   const[id,setId]=useState('');

//   var navigate=useNavigate();

//   const handleInputChange = (event) => {
//     setId(event.target.value);
//     const newValue = event.target.value;

//     setChecktrackid(prevState => ({
//       ...prevState,
//       idString: event.target.value
//     }));

//   };

//   var handleTrackOrder=()=>{

//     console.log(checktrackid.idString)
//     fetch("https://localhost:7245/api/TrackStatus/check_trackid/checktrackid", {
//       method: "POST",
//       headers: {
//         "accept": "text/plain",
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify({ ...checktrackid }),
//     })
//       .then(async (data) => {
//            if(data.status==200)
//            {
//             var myData = await data.json();
        
//             console.log(myData);
//              checktrackid.idString = id;
//              console.log(checktrackid.idString);
//             localStorage.setItem('trackstatusid',id)
//             setTrackid(id);
//             navigate('summary');
        
//            }
//            else{
//             alert("Invalid Track ID");
//            }
        
           
//       })
//       .catch((err) => {
//         console.log(err.error);
//       });

    
//   }
  

//   return (
//     <section>
//       <div className="outerdiv">
//         <div className="innerdiv">
//           <div className="body1">
//             <div className="item1">
//               <p id="item1_content">Track your order</p>
//             </div>
//             <div className="item2">
//               <p>
//                 To track your order, please enter Track ID below. This was given to you in the confirmation email you should have received
//               </p>
//             </div>
//           </div>
//           <div className="body2">
//             <div className="item3">
//               <p>Track ID/ Mail ID</p>
//               <input type="text" id="track_id" placeholder="Enter Track ID/ Mail ID"  onChange={handleInputChange} /><br /><br />
//             </div>
//             <div className="item4">
//               <input type="submit" id="btn" value="Track" onClick={handleTrackOrder} />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TrackStatus;


import React, { useState, useContext } from 'react';
import styles from '../Css/TrackStatus.module.css';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../App';

function TrackStatus() {
  const { trackid, setTrackid } = useContext(AppContext);

  const [checktrackid, setChecktrackid] = useState({
    idInt: 0,
    idString: '',
  });
  const [username, setUsername] = useState('Kanna@5873');


  const [id, setId] = useState('');
  var navigate = useNavigate();

  const handleInputChange = (event) => {
    setId(event.target.value);
    const newValue = event.target.value;

    setChecktrackid((prevState) => ({
      ...prevState,
      idString: event.target.value,
    }));
  };

  var handleTrackOrder = () => {
    console.log(checktrackid.idString);
    const apiUrl = `https://localhost:7245/api/TrackStatus/check_trackid/checktrackid?username=${encodeURIComponent(
      username
    )}`;
    fetch(apiUrl, {
      method: 'POST',
      headers: {
        accept: 'text/plain',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...checktrackid }),
    })
      .then(async (data) => {
        if (data.status == 200) {
          var myData = await data.json();

          console.log(myData);
          checktrackid.idString = id;
          console.log(checktrackid.idString);
          localStorage.setItem('trackstatusid', id);
          setTrackid(id);
          navigate('summary');
        } else {
          alert('Invalid Track ID');
        }
      })
      .catch((err) => {
        console.log(err.error);
      });
  };

  return (
    <section>
      <div className={styles.outerdiv}>
        <div className={styles.innerdiv}>
          <div className={styles.body1}>
            <div className={styles.item1}>
              <p className={styles.item1_content}>Track your order</p>
            </div>
            <div className={styles.item2}>
              <p>
                To track your order, please enter Track ID below. This was given to you in the confirmation email you should have received
              </p>
            </div>
          </div>
          <div className={styles.body2}>
            <div className={styles.item3}>
              <p>Track ID/ Mail ID</p>
              <input type="text" className={styles.track_id} placeholder="Enter Track ID/ Mail ID" onChange={handleInputChange} /><br /><br />
            </div>
            <div className={styles.item4}>
              <input type="submit" className={styles.btn} value="Track" onClick={handleTrackOrder} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TrackStatus;

