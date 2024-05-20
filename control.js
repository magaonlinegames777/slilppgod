
$('document').ready(
    function(){
        var PRODUCT_ID;
        
        const firebaseConfig = {
            apiKey: "AIzaSyDwwKUe3tQrE1vp-I6adic3yxtPpCizhc8",
            authDomain: "slilpp-ai.firebaseapp.com",
            projectId: "slilpp-ai",
            storageBucket: "slilpp-ai.appspot.com",
            messagingSenderId: "872339594976",
            appId: "1:872339594976:web:15f118112fa9677dcdfa85"
          };
           // Initialize Firebase
             firebase.initializeApp(firebaseConfig);

             //OCTOBER 11 2021
             
             $('.PRODUCTS_TABLE').on('keypress',function(e) {
                if(e.which == 13) {
                    SAVE_PRODUCT();
                }
            });

             //SEPTEMBER 9 2021
             getBTC(); 
            // GET_ALL_PRODUCTS();
    }

);


//OCTOBER 11 2021
$.fn.enterKey = function (fnc) {
    return this.each(function () {
        $(this).keypress(function (ev) {
            var keycode = (ev.keyCode ? ev.keyCode : ev.which);
            if (keycode == '13') {
                fnc.call(this, ev);
            }
        })
    })
}

function PRODUCT_CLICKS(){
    var id =this.event.target.id;
    var productID = $('#'+ id).attr('data-id');
    //alert('yeah: '+ productID);
    $('.prod_dwn_bx').removeClass('hide');


    PRODUCT_ID = productID;
}

function clearAll(){
    $('.ipt_f1 input').val('');
}

function GET_ALL_PRODUCTS(){
    var shop,balance,points,name,type
            ,country_state_zip,cc,bank,info
            ,last_order,mail_domain,uploaded,seller,price,number;


        $('.product_row').remove();
             //var shop = x.toLowerCase();
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
            number = doc.data().NUMBER;
            
            APPEND_PRODUCTS(doc.id,shop,balance,points,name,type,country_state_zip,cc,bank,info,last_order,mail_domain,uploaded,seller,price,number);
        });
    });
}
//SEPTEMBER 10 2021
function GET_PAYPAL_PRODUCTS(){
    var shop,balance,points,name,type
            ,country_state_zip,cc,bank,info
            ,last_order,mail_domain,uploaded,seller,price;
    //var shop = x.toLowerCase();
    $('.PRODUCTS_TABLE tbody tr').remove();
    firebase.firestore().collection("PRODUCTS").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, "WELLS FARGO => ", doc.data());


            if (doc.data().shop == 'paypal.com') {
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
                
                APPEND_PRODUCTS(doc.id,shop,balance,points,name,type,country_state_zip,cc,bank,info,last_order,mail_domain,uploaded,seller,price);
            }else{

            }
        });
    });
}
function GET_CASHAPP_PRODUCTS(){
    var shop,balance,points,name,type
            ,country_state_zip,cc,bank,info
            ,last_order,mail_domain,uploaded,seller,price;
    //var shop = x.toLowerCase();
     $('.PRODUCTS_TABLE tbody tr').remove();
    firebase.firestore().collection("PRODUCTS").get().then((querySnapshot) => {
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
    var shop,balance,points,name,type
            ,country_state_zip,cc,bank,info
            ,last_order,mail_domain,uploaded,seller,price;
    //var shop = x.toLowerCase();
     $('.PRODUCTS_TABLE tbody tr').remove();
    firebase.firestore().collection("PRODUCTS").get().then((querySnapshot) => {
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
    var shop,balance,points,name,type
            ,country_state_zip,cc,bank,info
            ,last_order,mail_domain,uploaded,seller,price;
    //var shop = x.toLowerCase();
     $('.PRODUCTS_TABLE tbody tr').remove();
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

            if (doc.data().shop == 'huntington.com') {
                APPEND_PRODUCTS(doc.id,shop,balance,points,name,type,country_state_zip,cc,bank,info,last_order,mail_domain,uploaded,seller,price);
            }else{
                console.log('Nothing to show huntington');
            }
        });
    });
}
function GET_BOA_PRODUCTS(){
    var shop,balance,points,name,type
            ,country_state_zip,cc,bank,info
            ,last_order,mail_domain,uploaded,seller,price;
    //var shop = x.toLowerCase();
     $('.PRODUCTS_TABLE tbody tr').remove();
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

            if (doc.data().shop == 'bankofamerica.com') {
                APPEND_PRODUCTS(doc.id,shop,balance,points,name,type,country_state_zip,cc,bank,info,last_order,mail_domain,uploaded,seller,price);
            }else{

            }
        });
    });
}
function GET_OTHER_PRODUCTS(){
    var shop,balance,points,name,type
            ,country_state_zip,cc,bank,info
            ,last_order,mail_domain,uploaded,seller,price;
    //var shop = x.toLowerCase();
     $('.PRODUCTS_TABLE tbody tr').remove();
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

            if (doc.data().shop != 'paypal.com' && doc.data().shop != 'bankofamerica.com' && doc.data().shop != 'huntington.com' && doc.data().shop != 'wellsfargo.com' && doc.data().shop != 'cash.app') {
                APPEND_PRODUCTS(doc.id,shop,balance,points,name,type,country_state_zip,cc,bank,info,last_order,mail_domain,uploaded,seller,price);
            }else{

            }
        });
    });
}

function DELETE_PRODUCT(){
    alert(PRODUCT_ID+": CONTINUE TO DELETE PRODUCT?");
    $('.SAVE_PRODUCT_BTN').addClass('hide');
    $('.SAVE_PRODUCT_LOADER').removeClass('hide');
    firebase.firestore().collection("PRODUCTS").doc(PRODUCT_ID).delete().then(() => {
        console.log("Document successfully deleted!");
        $('.SAVE_PRODUCT_BTN').addClass('hide');
         $('.SAVE_PRODUCT_LOADER').removeClass('hide');
         M.toast({html: 'PRODUCT DELETED'});
         GET_ALL_PRODUCTS();
        return 1;
    }).catch((error) => {
        console.error("Error removing document: ", error);
        $('.SAVE_PRODUCT_BTN').addClass('hide');
        $('.SAVE_PRODUCT_LOADER').removeClass('hide');
        M.toast({html: 'FAILED TO DELETE. CHECK INTERNET CONNECTION AND TRY AGAIN'});
        return 0;
    });
}
function SAVE_PRODUCT(){
    var docid = PRODUCT_ID;
    console.log('This is PI: '+ PRODUCT_ID);

    var shop,balance,points,name,type
            ,country_state_zip,cc,bank,info
            ,last_order,mail_domain,uploaded,seller,price,number;

    seller = $('#'+docid+'_seller_input').val().toLowerCase();
    price = $('#'+docid+'_price_input').val().toLowerCase();
    number = $('#'+docid+'_number_input').val().toLowerCase();
    numberr = parseInt(number);
    shop = $('#'+docid+'_shop_input').val().toLowerCase();
    balance = $('#'+docid+'_balance_input').val().toLowerCase();
    points = $('#'+docid+'_points_input').val().toLowerCase();
    name = $('#'+docid+'_name_input').val().toLowerCase();
    type = $('#'+docid+'_type_input').val().toLowerCase();
    country_state_zip = $('#'+docid+'_country_state_zip_input').val().toLowerCase();
    cc = $('#'+docid+'_cc_input').val().toLowerCase();
    bank = $('#'+docid+'_bank_input').val().toLowerCase();
    info = $('#'+docid+'_info_input').val().toLowerCase();
    last_order = $('#'+docid+'_last_order_input').val().toLowerCase();
    mail_domain = $('#'+docid+'_mail_domain_input').val().toLowerCase();
    uploaded = $('#'+docid+'_uploaded_input').val().toLowerCase();

    $('.SAVE_PRODUCT_BTN').addClass('hide');
    $('.SAVE_PRODUCT_LOADER').removeClass('hide');
    firebase.firestore().collection("PRODUCTS").doc(docid).update({
        shop: shop,
        balance: balance,
        points: points,
        name: name,
        type: type,
        country_state_zip: country_state_zip,
        cc: cc,
        bank:bank,
        info: info,
        last_order: last_order,
        mail_domain: mail_domain,
        uploaded: uploaded,
        seller: seller,
        NUMBER: numberr,
        price: price
    })
    .then(() => {
        console.log("PRODUCT UPDATED ID UPDATED!");
        M.toast({html: 'SUCCESS!!!'});

        GET_ALL_PRODUCTS();
        $('.SAVE_PRODUCT_BTN').removeClass('hide');
        $('.SAVE_PRODUCT_LOADER').addClass('hide');
        $('.prod_dwn_bx').addClass('hide');
    })
    .catch((error) => {
        // The document probably doesn't exist.
        console.error("Error UPDATING PRODUCT ID BECAUSE: "+error);
        M.toast({html: 'FAILED TO UPDATE... CHECK INTERNET CONNECTION AND TRY AGAIN!!!'});

        $('.SAVE_PRODUCT_BTN').removeClass('hide');
        $('.SAVE_PRODUCT_LOADER').addClass('hide');
        $('.prod_dwn_bx').addClass('hide');
    });
}
function APPEND_PRODUCTS(PRODUCTID,shop,balance,points,name,type,country_state_zip,cc,bank,info,last_order,mail_domain,uploaded,seller,price,NUMBER){
    $(".PRODUCTS_TABLE tbody")
    .append('<tr class="product_row" onclick="PRODUCT_CLICKS();" id="'+PRODUCTID+'">'
        +'<td>'
        +'<input type="text" class="control_inputs" value="'+shop+'" id="'+PRODUCTID+'_shop_input" data-id="'+PRODUCTID+'">'
        +'</td>'
        +'<td>'
        +'<input type="text" class="control_inputs" value="'+balance+'" id="'+PRODUCTID+'_balance_input" data-id="'+PRODUCTID+'">'
        +'</td>'
        +'<td>'
        +'<input type="text" class="control_inputs" value="'+points+'" id="'+PRODUCTID+'_points_input" data-id="'+PRODUCTID+'">'
        +'</td>'
        +'<td>'
        +'<input type="text" class="control_inputs" value="'+name+'" id="'+PRODUCTID+'_name_input" data-id="'+PRODUCTID+'">'
        +'</td>'
        +'<td>'
        +'<input type="text" class="control_inputs" value="'+type+'" id="'+PRODUCTID+'_type_input" data-id="'+PRODUCTID+'">'
        +'</td>'
        +'<td>'
        +'<input type="text" class="control_inputs" id="'+PRODUCTID+'_country_state_zip_input" data-id="'+PRODUCTID+'" value="'+country_state_zip+'">'
        +'</td>'
        +'<td>'
        +'<input type="text" class="control_inputs" id="'+PRODUCTID+'_cc_input" data-id="'+PRODUCTID+'" value="'+cc+'">'
        +'</td>'
        +'<td>'
        +'<input type="text" class="control_inputs"  id="'+PRODUCTID+'_bank_input" data-id="'+PRODUCTID+'" value="'+bank+'">'
        +'</td>'
        +'<td>'
        +'<input type="text" class="control_inputs"  id="'+PRODUCTID+'_info_input" data-id="'+PRODUCTID+'" value="'+info+'">'
        +'</td>'
        +'<td>'
        +'<input type="text" class="control_inputs"  id="'+PRODUCTID+'_last_order_input" data-id="'+PRODUCTID+'" value="'+last_order+'">'
        +'</td>'
        +'<td>'
        +'<input type="text" class="control_inputs"  id="'+PRODUCTID+'_mail_domain_input" data-id="'+PRODUCTID+'" value="'+mail_domain+'">'
        +'</td>'
        +'<td>'
        +'<input type="text" class="control_inputs"  id="'+PRODUCTID+'_uploaded_input" data-id="'+PRODUCTID+'" value="'+uploaded+'">'
        +'</td>'
        +'<td>'
        +'<input type="text" class="control_inputs"  id="'+PRODUCTID+'_seller_input" data-id="'+PRODUCTID+'" value="'+seller+'">'
        +'</td>'
        +'<td>'
        +'<input type="text" class="control_inputs"  id="'+PRODUCTID+'_price_input" data-id="'+PRODUCTID+'" value="'+price+'">'
        +'</td> <br>'
        +'<td>'
        +'<input type="text" class="control_inputs"  id="'+PRODUCTID+'_number_input" data-name="_number_input" data-id="'+PRODUCTID+'" value="'+NUMBER+'">'
        +'</td> <br>'
        +'<td>'
        +'<div class="prod_dwn_bx row hide">'
        +'<i class="material-icons grey-text">close</i>'
        +'<div style="text-align: center;" class="SAVE_PRODUCT_LOADER"> <i class="fa fa-spinner fa-spin white-text hide"></i> </div>'
        +'<div class="red col s6"><a class="SAVE_PRODUCT_BTN" data-id="'+PRODUCTID+'"  onclick="DELETE_PRODUCT();">Delete<a/></div>'
        +'<div class="teal col s6"><a class="SAVE_PRODUCT_BTN" data-id="'+PRODUCTID+'"  onclick="SAVE_PRODUCT();">Save<a/></div>'
        +'</div>'
        +'</td>'
    +'</tr>');
}
function ADD_PRODUCT(){

    var shop,balance,points,name,type
            ,country_state_zip,cc,bank,info
            ,last_order,mail_domain,uploaded,seller,price;
            
            shop = $('#shop_input').val();
            balance = $('#balance_input').val();
            points = $('#balance_input').val();
            info = $('#info_input').val();
            last_order = $('#last_order_input').val();
            type = $('#type_input').val();
            cc = $('#cc_input').val();
            bank = $('#bank_input').val();
            uploaded = $('#uploaded_input').val();
            name = $('#name_input').val();
            seller = $('#seller_input').val();
            price= $('#price_input').val();

            mail_domain = $('#mail_domain_input').val();

    $('.VBB').hide();
    firebase.firestore().collection("PRODUCTS").add({
        shop: shop,
        balance: balance,
        points: points,
        name: name,
        type: type,
        country_state_zip: 'United States',
        cc: cc,
        bank:bank,
        info: info,
        last_order: last_order,
        mail_domain: mail_domain,
        uploaded: uploaded,
        seller: seller,
        price: price
    })
    .then((docRef) => {
        console.log("TRANSACTION WRITTEN SUCCESSFULLY: ", docRef.id);
        $('.VBB').show();
        GET_ALL_PRODUCTS();
    })
    .catch((error) => {
        console.error("ERROR WRITING TRANSACTION: ", error);
        $('.VBB').hide();
    });
}
function whatisthis(){
    $('.BTCADDRESSSAVEBTN').hide();
    var fan = $('#BTC_ADDRESS_VAL').val();
    if (fan != '') {
        firebase.firestore().collection("btc_address").doc("blockchain").set({
            btc: fan
        })
        .then(() => {
            $('.BTCADDRESSSAVEBTN').show();
            $('.BTCADDRESSSAVEBTN').show();
            console.log("Document successfully written!");
            M.toast({html: 'BTC ADDRESS SAVED...'});
        })
        .catch((error) => {
            console.error("Error writing document: ", error);
        });
    }
}

function CHANGE_BTC_ADDRESS(){
    $('.BTCADDRESSSAVEBTN').hide();
    var btcx = $('.btcaddress_txt').val();
    alert(btcx);
    if (btcx != '') {
        firebase.firestore().collection("btc_address").doc("blockchain").set({
            btc: btcx
        })
        .then(() => {
            $('.BTCADDRESSSAVEBTN').show();
            $('.BTCADDRESSSAVEBTN').show();
            console.log("Document successfully written!");
            M.toast({html: 'BTC ADDRESS SAVED...'});
        })
        .catch((error) => {
            console.error("Error writing document: ", error);
        });
    } else {
        M.toast({html: 'FAILED. Check internet connection'});
    }
    
}

function getBTC(){
    var docRef = firebase.firestore()
    .collection("btc_address").doc("blockchain");

    docRef.get().then((doc) => {
        if (doc.exists) {
            console.log("Document data:", doc.data());
            $('.btcaddress_txt').val(doc.data().btc);
            $('.btc_p').text(doc.data().btc);
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
}