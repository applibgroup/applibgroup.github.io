window.onload = function(){
    let userName,email,institution,phoneNum;

    function userDetails(){
        userName =  document.getElementById('name').value;
        email = document.getElementById('email').value;
        institution = document.getElementById('institute').value;
        phoneNum = document.getElementById('phone').value;

    }



    document.getElementById('submit-detail').onclick = function(){
        userDetails();
            if(userName === '' && email === '' && institution === '' && phoneNum === ''){
                return
            }else{
                firebase.database().ref('users/' + userName).set({
                    name: userName,
                    email: email,
                    institute : institution,
                    phone:phoneNum
                    
      
                  });
            }

                //   document.querySelector('.alert-success').style.display = 'block';
                //   setTimeout(function(){ document.querySelector('.alert-success').style.display = 'none' }, 3000);
                  
      
                //   $('#myModal').modal('hide');
                //   return false;
            }
        

                      
    }
    

     
   

    // function writeUserData(userId, name, email, imageUrl) {
    //     firebase.database().ref('users/' + userId).set({
    //       username: name,
    //       email: email,
    //       profile_picture : imageUrl
    //     });
    //   }
    // writeUserData('1','test','test@info.com','sdkj');
