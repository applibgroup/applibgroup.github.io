window.onload = function(){
    document.querySelector('.alert-success').style.display = 'none';
    let userName,email,institution,phoneNum;

    function userDetails(){
        userName =  document.getElementById('name').value;
        email = document.getElementById('email').value;
        institution = document.getElementById('institution').value;
        phoneNum = document.getElementById('phoneNum').value;

    }



    document.getElementById('submit-detail').onclick = function(){
        userDetails();

        
            firebase.database().ref('users/' + userName).set({
              name: userName,
              email: email,
              institution : institution,
              phone:phoneNum
              

            });
            document.querySelector('.alert-success').style.display = 'block';
            setTimeout(function(){ document.querySelector('.alert-success').style.display = 'none' }, 3000);
            

            $('#myModal').modal('hide');
            return false;
                      
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
