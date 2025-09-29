var bank_checker=0;
var bank_investment_legal_freight='bank';
var whichAccount;
var bankAccount = 'account1';
var trans_id, transaction_editor_checker;
$(document).ready(function(){
    var firebaseConfig = {
        apiKey: "AIzaSyA51VbpKCNz9OyCtcdLuf7x3IVC1ZKBJRI",
        authDomain: "anon-d0646.firebaseapp.com",
        projectId: "anon-d0646",
        storageBucket: "anon-d0646.firebasestorage.app",
        messagingSenderId: "873477732809",
        appId: "1:873477732809:web:88ea4d3246bcf5873a5018"
    };


    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    db = firebase.firestore();
    // SWITCH_CHECKBOX();
    // LISTEN_BTC_TRANSACTIONS();
    GET_TRANSACTIONS();

    $('.acc_lists_ct').click(function() {
        var text = $(this).text();
        console.log(text);
        alert(text);
      });
      
});


function SAVE_BANK_PROFILE(){
    if(bank_checker == 0){
        console.log('Bank Checker = '+bank_checker);
        $('#save_profile_btn').hide();
        setTimeout(() => {
            $('#save_profile_btn').show();
            bank_checker = 1;
        console.log('Bank Checker 1 = '+bank_checker);

        }, 3666);
        
    }

}

function TRANSACTION_EDIT(){
    if(bank_checker == 0){
        console.log('Bank Checker = '+bank_checker);
        $('#save_profile_btn').hide();
        setTimeout(() => {
            $('#save_profile_btn').show();
            bank_checker = 1;
        console.log('Bank Checker 1 = '+bank_checker);

        }, 3666);
        
    }
}

function EDIT_TRANSACTION_LIST(docid){
    $('.EDTBTN').css('visibility', 'hidden');
    if (bank_checker == 0) {
        let dataId = $(docid).data("id");
        console.log('Edit this '+dataId);
        // USE TID TO GET TRANSACTION FROM DB
        trans_id = dataId;
        transaction_editor_checker = 'old';
        get_this_transaction();
    }
}
function DELETE_TRANSACTION_LIST(docid){
    $('.EDTBTN').css('visibility', 'hidden');
    if (bank_checker == 0) {
        let dataId = $(docid).data("id");
        console.log('Edit this '+dataId);
        // USE TID TO GET TRANSACTION FROM DB
        trans_id = dataId;
        transaction_editor_checker = 'old';
        delete_this_transaction();
    }
}

function SAVE_PROFILE(){
    var whichAcc = bankAccount;
    var acc_holder = $('#icon_holder_investment').val().toLowerCase();
    var available_balance = $('#icon_available_balance').val().toLowerCase();
    var total_investment = $('#icon_total_investment').val().toLowerCase();
    var total_balance = $('#icon_total_balance').val().toLowerCase();
    var home_address = $('#icon_home_address_investment').val().toLowerCase();
    var email = $('#icon_email_investment').val().toLowerCase();
    var isChecked=document.getElementById("switchValue").checked;
    console.log(isChecked); 
    console.log('Total Investment: '+total_investment);
    $('#save_profile_btn').hide();
    // save to db
    if (isChecked == false) {
        add_data(whichAcc,acc_holder,email,home_address,
            total_investment,total_balance,available_balance,
            '0','locked');
    }else{
        add_data(whichAcc,acc_holder,email,home_address,
            total_investment,total_balance,available_balance,
            '0','active');
    }

   
    if (bank_checker == 1) {
        var accHoldr,availabeBalance,totalInvestment,
        totalBalance, homeAddress, email;
        accHoldr = $('#icon_holder').val().toLowerCase();
        availabeBalance = $('#icon_available_balance').val().toLowerCase();
        totalInvestment = $('#icon_total_investment').val().toLowerCase();
        totalBalance = $('#icon_total_balance').val().toLowerCase();
        homeAddress = $('#icon_home_address').val().toLowerCase();
        email = $('#icon_email').val().toLowerCase();
        
        if (accHoldr != "" & availabeBalance == "" &email == "") {
            console.log('Account Holder: '+ accHoldr);
            add_data(whichAcc);
            
        }

        $('.editor_god').removeClass('hide');
    }
}

function ADD_NEW_TRANSACTION(){
    $('.notice').removeClass('hide');
    $('.add_new_transaction').addClass('hide');
}
function TERMINATE_BTN(){
    $('.notice').addClass('hide');
    $('.add_new_transaction').removeClass('hide');
}
function ROGER_THAT(){
    transaction_editor_checker = 'new';
    $('.notice').addClass('hide');
    $('.add_new_transaction').removeClass('hide');
    $('.editor_god').removeClass('hide');
    $('.editor_god input').val('');
}
function close_editor(){
    $('.editor_god').addClass('hide');
    bank_checker = 0;
}
function CREDIT_TRANSACTION(){
    var priorityNumber = parseInt($("#add_transaction_priority_number").val());
    var dateOfTransaction = $("#add_transaction_date").val();
    var description = $("#add_transaction_description").val().toLowerCase();
    var amountOfTransaction = $("#add_transaction_amount").val();
    console.log('PRIORITY NUMBER: '+priorityNumber);
    if (priorityNumber != '' && dateOfTransaction != ''&&description != ''
    &&amountOfTransaction != '') {
        console.log('ADD TO DATABASE');
        // ADD TO TRASACTION
        if (transaction_editor_checker == 'old') {
            save_this_transaction(whichAccount,priorityNumber,dateOfTransaction,description,amountOfTransaction,
                'credit');
        }
        if (transaction_editor_checker == 'new') {
            // THIS IS A NEW TRANSACTION SO ADD
            add_new_transaction(whichAccount,priorityNumber,dateOfTransaction,description,amountOfTransaction,
                'credit');
        }
           
    }
}
function editor_transaction_ui(){
    $('.editor_navs').hide();
    $('.pldr').removeClass('hide');

    setTimeout(() => {
       $('.editor_navs').show();
       $('.pldr').addClass('hide');
       close_editor();
       M.toast({html: 'SUCCESS: Transaction Added'});
       get_all_transaction();
    }, 1952);
}

function appendTransaction(priority,date,description,amount,tid){
    $(".tt_history_bd").append('<tr><td>'+priority+'</td><td>'+date+'</td><td>'+description+'</td><td>'+amount+'</td><td> <i data-id='+tid+' class="material-icons grey-text EDTBTN" onclick="EDIT_TRANSACTION_LIST(this);">edit</i></td><td><i data-id='+tid+' class="material-icons del_btn EDTBTN" onclick="DELETE_TRANSACTION_LIST(this);">delete</i></td></tr>');
}

function SWITCH_CHECKBOX(){
    $('#switchValue').prop('checked', true);
}

function SWITCH_ACCOUNT_STATE(){
    var which_account = bankAccount;
    var currentState=document.getElementById("switchValue").checked;
    if (currentState == true) {
        // save to db
        $('.refreshG').hide();
        $('.loaderG').removeClass('hide');
        update_data(which_account,'active');
    }
    if (currentState == false) {
        // save to db
        update_data(which_account,'locked');
    }
    // var isChecked = this.checked;
    console.log("Test: " + currentState);
}

function ACC_VERIFICATION(){
    var db = firebase.firestore();
    var which_account = bankAccount;
    var currentState=document.getElementById("account_verification_checkbox").checked;
    if (currentState == true) {
        // set which_account to 
        db.collection("BANKS").doc(which_account).update({
            account_verified: true
        })
        .then(() => {
            console.log("ACCOUNT PROFILE VERIFIED!");
           M.toast({html: 'SUCCESS: Verified'});

        })
        .catch((error) => {
            // The document probably doesn't exist.
            console.error("Error updating ACCOUNT PROFILE: ", error);
        });
    }
    if (currentState == false) {
        db.collection("BANKS").doc(which_account).update({
            account_verified: false
        })
        .then(() => {
            console.log("ACCOUNT PROFILE VERIFIED!");
            M.toast({html: 'SUCCESS: Verified'});

        })
        .catch((error) => {
            // The document probably doesn't exist.
            console.error("Error updating ACCOUNT PROFILE: ", error);
        });
    }
    // var isChecked = this.checked;
    console.log("Test: " + currentState);
}

// CHECKSK TRANSFER PERMIT FOR TRANSFERS
function transferChecker(){
    db = firebase.firestore();
    db.collection("BANKTRANSFERPERMIT").where("permission", "==", 1)
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            $('.TRANSFER_REQUEST_BX').removeClass('hide');

            // get all transfer request and send to transaction history and check - delete
            var req_acc_num = $('#request_account_number').val(doc.data().account_number);
            var req_rut_num = $('#request_routing_number').val(doc.data().routing_number);
            var req_recvr_name = $('#request_receiver_name').val(doc.data().receiver_name);
            var req_bnk_name = $('#request_bank_name').val(doc.data().bank_name);
            var req_bnk_addy = $('#request_bank_address').val(doc.data().bank_address);
            var req_amount = $('#request_amount').val(doc.data().amount);
            var req_date= $('#request_date').val(doc.data().timestamp);
            // const date = doc.data().timestamp.toDate().toDateString();
            

             req_date= $('#request_date').val(req_date);


            // alert(req_acc_num);

            
        });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
        $('.TRANSFER_REQUEST_BX').addClass('hide');

    });
}


// APPROVE TRANSFER 
function APPROVE_TRANSACTION(){
    var ACC_NUM = parseInt($("#request_account_number").val());
    var ROUT_NUM = $("#request_routing_number").val();
    var RECVR_NAME = $("#request_receiver_name").val().toLowerCase();
    var BANK_NAME = $("#request_bank_name").val();
    var BANK_ADDRESS = $("#request_bank_address").val();
    var DATE = $("#request_date").val();
    var AMOUNT = $("#request_amount").val();
    console.log('transaction made to: '+RECVR_NAME);
  
        console.log('ADD TO DATABASE');
        // ADD TO TRASACTION
        var db = firebase.firestore();
        db.collection("BANK_HISTORY").add({
            account: whichAccount,
            priority: 100,
            date: DATE,
            description: "Debit transfer made to "+RECVR_NAME,
            receiver: RECVR_NAME,
            account_number: ACC_NUM,
            routing_number: ROUT_NUM,
            bank: BANK_NAME,
            address: BANK_ADDRESS,
            transaction_id:"",
            amount: AMOUNT,
            transaction_status: "debit",
        })
        .then((docRef) => {
            console.log("TRANSACTION APPROVED! ");
            $('.rq_form').hide(); 
            $('.req_loads').hide(); 

            // update transfer permit or delete
            db.collection("BANKTRANSFERPERMIT").doc(whichAccount).update({
                permission: 0
            })
            .then(() => {
               M.toast({html: 'SUCCESS: Transaction added'});
    
            })
            .catch((error) => {
                // The document probably doesn't exist.
                console.error("Error adding transaction to bank history: ", error);
            });


            setTimeout(() => {
            $('.req_loads').hide();  
            $('.TRANSFER_REQUEST_BX').addClass('hide');  
            get_all_transaction();
            }, 4555);
        })
        .catch((error) => {
            console.error("FAILED TO SEND TRNSACTION : ", error);
        });
           
}

function refresh_account(){
    $('.refreshG').hide();
    var db = firebase.firestore();
    var which_account = bankAccount;
    
     // update transfer permit or delete
     db.collection("BANKS").doc(which_account).update({
        account_refresh: 1
    })
    .then(() => {
       M.toast({html: 'SUCCESS: ACCOUNT REFRESH '});
       $('.refreshG').show();

    })
    .catch((error) => {
        // The document probably doesn't exist.
        console.error("Error ACCOUNT REFRESH: ", error);
       $('.refreshG').show();

    });

   
}