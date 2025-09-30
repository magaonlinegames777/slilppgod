$(document).ready(function(){
    var firebaseConfig = {
            apiKey: "AIzaSyBxi5sEOZfbEx6RRyPcMyoZo-8pVHOR5Ng",
            authDomain: "ghost-industry-1.firebaseapp.com",
            projectId: "ghost-industry-1",
            storageBucket: "ghost-industry-1.firebasestorage.app",
            messagingSenderId: "1082553423859",
            appId: "1:1082553423859:web:8de217a7f8ef82ad122486"
    };


    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    db = firebase.firestore();
    // SWITCH_CHECKBOX();
    // LISTEN_BTC_TRANSACTIONS();

    console.log('We are here to pray...');
    GET_TRANSACTIONS();

    // db.collection("TRANSACTIONSS").orderBy("DATE", "desc")
    // .get()
    // .then((querySnapshot) => {
    //     querySnapshot.forEach((doc) => {
    //         // doc.data() is never undefined for query doc snapshots
    //         // console.log(doc.id, " => ", doc.data());
    //         acc_id = doc.data().CLIENT_ID;
    //         var dateString = doc.data().DATE;
    //         var firDate = dateString.seconds;
    //         var jsDate = new Date(firDate * 1000);
    //         var gmtPlus8Date = jsDate.toLocaleString('en-US', { timeZone: 'Etc/GMT' });
    //         // alert(jsDate);

    //         // IMPROVED AND APPROVED BY HOD
    //         const listItem = `
    //         <li class="acc_lists_ct ac_1" account-id="${acc_id}" btc-address="${doc.data().TRANSACTION_ADDRESS}" btc-date="${doc.data().s_date}" onclick="GET_THIS_TRANSACTION(this);">
              
    //           <span class="btc_client_id">${doc.data().CLIENT_ID}</span>
    //           <span class="date_transaction_btc">${gmtPlus8Date}</span>
    //           <span class="transaction_btc_address">${doc.data().TRANSACTION_ADDRESS}</span>
    //         </li>
    //       `;
    //       // Append the list item to a container element
    //       $('#transactions_handler_bx').append(listItem);

    //         // // Create a list item with account details and Bitcoin transaction information
    //         // var listItem = '<li class="acc_lists_ct ac_1" account-id="'+acc_id+'" btc-address="'+doc.data().TRANSACTION_ADDRESS+'" btc-date="'+doc.data().s_date+'" onclick="GET_THIS_TRANSACTION(this);">';
    //         // listItem += doc.data().CLIENT_ID;
    //         // listItem += '<span class="date_transaction_btc">';
    //         // listItem += gmtPlus8Date; // Use a pre-defined variable to display the date in GMT+8 format
    //         // listItem += '</span>';
    //         // listItem += '<span class="transaction_btc_address">';
    //         // listItem += doc.data().TRANSACTION_ADDRESS;
    //         // listItem += '</span> ';
    //         // listItem += '</li>';
    //         // listItem += '<hr></hr>';

    //         // // Append the list item to a container element
    //         // $('#transactions_handler_bx').append(listItem);


    //                     // var szData = '<li class="acc_lists_ct ac_1" account-id="'+acc_id+'" btc-address="'+doc.data().TRANSACTION_ADDRESS+'" btc-date="'+doc.data().s_date+'" onclick="GET_THIS_TRANSACTION(this);">';
    //                     // szData += doc.data().CLIENT_ID;
    //                     // szData += '<span class="date_transaction_btc">';       
    //                     // // szData += new Date(doc.data().DATE);       
    //                     // szData += gmtPlus8Date;      
    //                     // szData += '</span>';       
    //                     // szData += '<span class="transaction_btc_address">';       
    //                     // szData += doc.data().TRANSACTION_ADDRESS;       
    //                     // szData += '</span> ';     
    //                     // szData += '</li>';        
    //                     // szData += '<hr></hr>';     
        
    //                     // $('#transactions_handler_bx').append(szData);
    //     });
    // })
    // .catch((error) => {
    //     console.log("Error getting documents: ", error);
    // });
   
        
});

function CHECK_COOKIE(){
    // Check for cookie
    if (document.cookie.indexOf('mycookie') == -1) {
        console.log('no cookie found so creating now');
        // Generate a random number to use as cookie value
        var cookieValue = Math.floor(Math.random() * 1000) + 1;
        // Set the cookie
        document.cookie = "mycookie=" + cookieValue;
        // Save the cookie data in Firebase Firestore
        firebase.firestore().collection("cookies").add({
        cookieName: "mycookie",
        cookieValue: cookieValue
        })
        .then((docRef) => {
            console.log("COOKIE successfully written! "+docRef + docRef.id);
            
        })
        .catch((error) => {
            console.error("Error writing COOKIE: ", error);
        });
    }else{
        var cookieVal= checkVisitorCookie();
        alert("Cookie momma: " + cookieVal);
    }
}
function LISTEN_BTC_TRANSACTIONS(){
    $('#transactions_handler_bx li').remove();
    console.log('check anon for transactions...');
    var acc_id,btc_address;
    $('#transactions_handler_bx li').remove();

    db.collection("TRANSACTIONS").where("STATUS", "==", "unconfirmed")
    .onSnapshot((querySnapshot) => {
        var unconfirmed_transactions = [];
        querySnapshot.forEach((doc) => {
            unconfirmed_transactions.push(doc.data().name);
            console.log("New TRANSACTION ADDED: ", doc.data());
            acc_id = doc.data().CLIENT_ID;

            var szData = '<li class="acc_lists_ct ac_1" account-id="'+acc_id+'" btc-address="'+change.doc.data().TRANSACTION_ADDRESS+'" btc-date="'+change.doc.data().s_date+'" onclick="GET_THIS_TRANSACTION(this);">';
                    szData += change.doc.data().CLIENT_ID;
                    szData += '<span class="date_transaction_btc">';       
                    szData += change.doc.data().s_date;       
                    szData += '</span>';       
                    szData += '<span class="transaction_btc_address">';       
                    szData += change.doc.data().TRANSACTION_ADDRESS;       
                    szData += '</span> ';     
                    szData += '</li>';        
                    // szData += '<hr></hr>';     
    
                    $('#transactions_handler_bx').append(szData);

        });
        console.log("Current unconfirmed_transactions in ANON: ", unconfirmed_transactions.join(", "));
    });
}
// GET PENDING TRANSACTION - UPDATED -------08*04*2023
function GET_TRANSACTIONS(){
    console.log('BTC GET TRANSACTION NOW');
   
    $('#transactions_handler_bx li').remove();

    db.collection("TRANSACTIONS").orderBy("DATE", "desc")
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            // console.log(doc.id, " => ", doc.data());
            acc_id = doc.data().userid;
            var dateString = doc.data().DATE;
            // Convert to JavaScript Date
            const jssDate = dateString.toDate();
            var firDate = dateString.seconds;
            var normalDate = doc.data().s_date;
            var jsDate = new Date(firDate * 1000);
            var gmtPlus8Date = jsDate.toLocaleString('en-US', { timeZone: 'Etc/GMT' });
            // alert(jsDate);

            // IMPROVED AND APPROVED BY HOD
            const listItem = `
            <li class="acc_lists_ct ac_1" account-id="${doc.data().userid}" btc-address="${doc.data().btc_used}" btc-date="${doc.data().DATE}" onclick="GET_THIS_TRANSACTION(this);">
              
              <span class="btc_client_id">${doc.data().name}</span>
              <span class="date_transaction_btc">${jssDate}</span>
              <span class="transaction_btc_address">${doc.data().btc_used}</span>
            </li>
          `;
          // Append the list item to a container element
          $('#transactions_handler_bx').append(listItem);

        });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });
}
function GET_THIS_TRANSACTION(x){
    // alert(x);
    var idd = $(x).attr('account-id');
    var btc = $(x).attr('btc-address');
    var btc_date = $(x).attr('btc-date');
    // var jssdate = btc_date;
    var match = btc_date.match(/seconds=(\d+),\s*nanoseconds=(\d+)/);

    if (match) {
    var seconds = parseInt(match[1]);
    var nanoseconds = parseInt(match[2]);
    var milliseconds = seconds * 1000 + Math.floor(nanoseconds / 1e6);
    var jssdate = new Date(milliseconds);
    console.log(jssdate); // This will be a valid JS Date
    } else {
    console.error("Invalid timestamp format");
    }
    // var jssdate = new Date(btc_date);
    // const jssdate =  btc_date.toDate();
    
    console.log("account id of list item clicked  ===: "+ jssdate);
    

    var docRef = db.collection("accounts").doc(idd);

    docRef.get().then((doc) => {
        if (doc.exists) {
            console.log("Document data:", doc.data());
                // var dateString = doc.data().DATE;

                  $('#save_profile_btn').removeClass('hide');
                // whichAccount = doc.id;
                // alert(doc.data().user);
                $('#account_holder').val(doc.data().username);
                $('#available_balance').val(doc.data().balance);
                // $('#btc_card_number').val(doc.data().btc_admin);
                $('#btc_address').val(btc);
                $('#transaction_date').val(jssdate);
                $('#account_directory').val(idd);
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });

  
}
// 2025 modified
function getThisUser(){
    db.collection("cities").where("capital", "==", true)
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
        });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });
}
function GET_THIS_TRANSACTIONn(x){
    var idd = $(x).attr('data-id');
    console.log("LIST ITEM CLICKED ===: "+ idd);
    
    //alert('This : '+idd);
    
    var btcAddress = $(x + " .transaction_btc_address").text();
    //alert('This : '+btcAddress);
    var btcDate = $(x + " .date_transaction_btc").text();
    var directory;
    var docRef = db.collection("accounts").doc(idd);
    
    docRef.get().then((doc) => {
        if (doc.exists) {
                 directory = doc.data().username + doc.data().password;
                console.log("ACCOUNT TRANSACTION INFO:", doc.data());
                $('#save_profile_btn').removeClass('hide');
                // whichAccount = doc.id;
                // alert(doc.data().user);
                $('#account_holder').val(doc.data().username);
                $('#available_balance').val(doc.data().balance);
                $('#btc_address').val(btcAddress);
                $('#transaction_date').val(btcDate);
                $('#account_directory').val(directory);
    
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
        });
}

function GET_TRANSACTIONSS(type){
    $('#transactions_handler_bx li').remove();
    if (type == 'unconfirmed') {
        console.log('OPEN UCNFRMED');
        db = firebase.firestore();
             db.collection("TRANSACTIONS").where("status", "unconfirmed")
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    // doc.data() is never undefined for query doc snapshots
                    console.log(doc.id, " => ", doc.data());
                    var szData = '<li class="acc_lists_ct ac_1" id="'+doc.id+'" onclick="GET_THIS_TRANSACTION(this);">';
                        szData += doc.data().account_dir;
                        szData += '</li>';   
    
    
                        $('#transactions_handler_bx').append(szData);
                   
                });
            })
            .catch((error) => {
                console.log("Error getting documents: ", error);
            });
    }
}

function SAVE_UPDATE(){
    $('#save_profile_btn').hide();
    var acc_dir= $('#account_directory').val();
    var balance = $('#available_balance').val();

    // check if btc_admin is available
    var acc_dir= $('#account_directory').val();
    var firestore = firebase.firestore();
    var docRef = firestore.collection("accounts").doc(acc_dir);
    docRef.get()
      .then(function(doc) {
        if (doc.exists) {
            if (doc.data().btc_admin == '1') {
                // update to two
                var number = '1';
                UPDATE_BTC_COUNTER(number);
                update_user_account(acc_dir,balance);
                console.log('BTC UPDATED LOGS: '+number);
            }
            if (doc.data().btc_admin == '2') {
                // update to three
                var number = '2';
                UPDATE_BTC_COUNTER(number);
                update_user_account(acc_dir,balance);
                console.log('BTC UPDATED LOGS: '+number);

            }if (doc.data().btc_admin == '3') {
                // update to 1
                var number = '3';
                UPDATE_BTC_COUNTER(number);
                update_user_account(acc_dir,balance);
                console.log('BTC UPDATED LOGS: '+number);
            }
        } else {
          console.error("No such document");
        }
      })
      .catch(function(error) {
        console.error("Error getting document:", error);
      });

    
}
function update_user_account(account_dir, account_balance){
 
    db.collection("accounts").doc(account_dir).update({
        balance: account_balance
    })
    .then(() => {
        console.log("transaction confirmed successfully!");
        // update transactions collection
        db.collection("TRANSACTIONS").doc(account_dir).update({
            STATUS: 'confirmed'
        })
        .then(() => {
            console.log("Document successfully updated!");
            $('#save_profile_btn').show();
              M.toast({html: 'SUCCESS: updated'});
            // LISTEN_BTC_TRANSACTIONS();
            GET_TRANSACTIONS();
        })
        .catch((error) => {
            // The document probably doesn't exist.
            console.error("Error updating document: ", error);
        });
    })
    .catch((error) => {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
    });
}
// may 2023 -01
function BTC_OPERATOR(){
    var acc_dir= $('#account_directory').val();
    var firestore = firebase.firestore();
    var docRef = firestore.collection("accounts").doc(acc_dir);
    docRef.get()
      .then(function(doc) {
        if (doc.exists) {
            if (doc.data().btc_admin == '1') {
                // update to two
                var number = '1';
                UPDATE_BTC_COUNTER(number);
            }
            if (doc.data().btc_admin == '2') {
                // update to three
                var number = '2';
                UPDATE_BTC_COUNTER(number);

            }if (doc.data().btc_admin == '3') {
                // update to 1
                var number = '3';
                UPDATE_BTC_COUNTER(number);

            }
          var documentData = doc.data();
          console.log("Document data:", documentData);
        } else {
          console.error("No such document");
        }
      })
      .catch(function(error) {
        console.error("Error getting document:", error);
      });
}
function UPDATE_BTC_COUNTER(number){
    var db = firebase.firestore();
    var acc_dir= $('#account_directory').val();

    if (number == '1') {
        db.collection("accounts").doc(acc_dir).update({
            btc_admin: '2'
        })
        .then(() => {
            console.log("Document successfully updated!");
            $('#save_profile_btn').show();       
        })
        .catch((error) => {
            // The document probably doesn't exist.
            console.error("Error updating document: ", error);
        });
    }

    if (number == '2') {
        db.collection("accounts").doc(acc_dir).update({
            btc_admin: '3'
        })
        .then(() => {
            console.log("Document successfully updated!");
            $('#save_profile_btn').show();       
        })
        .catch((error) => {
            // The document probably doesn't exist.
            console.error("Error updating document: ", error);
        });
    }

    if (number == '3') {
        db.collection("accounts").doc(acc_dir).update({
            btc_admin: '1'
        })
        .then(() => {
            console.log("Document successfully updated!");
            $('#save_profile_btn').show();       
        })
        .catch((error) => {
            // The document probably doesn't exist.
            console.error("Error updating document: ", error);
        });
    }
    
}

function cookies(){
    var cookieName = "visitorId";
    var visitorId = generatedVisitorID();

    var expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate()+365);

    var cookieValue = encodeURIComponent(visitorId) + "; expires="+expirationDate.toUTCString() + "; path=/";

    document.cookie = cookieName + "=" + cookieValue;
}

function generatedVisitorId(){
    var currentDate = new Date();
    var randomValue = Math.floor(Math.random()*1000000);
    return "visitor_" + currentDate.getTime() + "_" +randomValue;
}


function checkVisitorCookie(){
    var cookieName = "visitorId";
    var cookieValue = '';
    var cookieArray = document.cookie.split("; ");
    for (var i =  0; i < cookieArray.length; i++) {
        var cookie = cookieArray[i];
        var name = cookie.split('=')[0];
        var value = cookie.split('=')[1];
        if (name === cookieName) {
            cookieValue = decodeURIComponent(value);
        }
    }
    return cookieValue;
}

// 2023 MARCH 14 
function REFRESH_ACCOUNT(){
    $('.refreshGBX').hide();
    var directory_account = $('#account_directory').val();
    if (directory_account != '') {
        db.collection("accounts").doc(directory_account).update({
            account_refresh: '1'
        })
        .then(() => {
            console.log("Document successfully updated!");
            $('#save_profile_btn').show();
              M.toast({html: 'SUCCESS: updated'});  
              $('.refreshGBX').show();
    
        })
        .catch((error) => {
            // The document probably doesn't exist.
            console.error("Error updating document: ", error);
            $('.refreshGBX').show();
        });
    }
    
}
