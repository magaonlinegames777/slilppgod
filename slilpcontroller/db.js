function add_data(which_account,name,email,homeAddress,totalInvestment,
    totalBalance,availableBalance,accountRefresh,status){
    // Add a new document in collection "cities"
    // var name,email,homeAddress,totalInvestment,
    // totalBalance,availableBalance,accountRefresh,status;
    // name = $('#icon_holder').val().toLowerCase();
    console.log('ACCOUNT HOLDER 2.0: ' + name);
    var db = firebase.firestore();
    // FOR BANK SESSIONS ONLY 
    if (bank_investment_legal_freight == 'bank') {
        db.collection("BANKS").doc(which_account).set({
            account_holder: name,
            email: email,
            home_address: homeAddress,
            total_balance: totalBalance,
            available_balance: availableBalance,
            total_investment: totalInvestment,
            account_refresh: accountRefresh,
            status: status
        })
        .then(() => {
            console.log("ACCOUNT successfully written!");
            $('.refreshG').show();
            $('.loaderG').addClass('hide');
            bank_checker = 0;
            $('#save_profile_btn').show();
           M.toast({html: 'SUCCESS: Saved'});

        })
        .catch((error) => {
            console.error("Error writing ACCOUNT: ", error);
            $('.refreshG').show();
            $('.loaderG').addClass('hide');
            $('#save_profile_btn').show();
        });
    }
    // FOR INVESTMENT SESSIONS
    if (bank_investment_legal_freight == 'investment') {
        db.collection("INVESTMENTS").doc(which_account).set({
            account_holder: name,
            email: email,
            home_address: homeAddress,
            total_investment: totalInvestment,
            total_balance: totalBalance,
            available_balance: availableBalance,
            account_refresh: accountRefresh,
            status: status
        })
        .then(() => {
            console.log("ACCOUNT successfully written!");
            $('.refreshG').show();
            $('.loaderG').addClass('hide');
            $('#save_profile_btn').show();
            
           M.toast({html: 'SUCCESS: Saved'});

        })
        .catch((error) => {
            console.error("Error writing ACCOUNT: ", error);
            $('.refreshG').show();
            $('.loaderG').addClass('hide');
            $('#save_profile_btn').show();
        }); 
    }
        

}

function update_data(which_account,status){
    var db = firebase.firestore();
    if (bank_investment_legal_freight == 'bank') {
        db.collection("BANKS").doc(which_account).update({
            status: status
        })
        .then(() => {
            console.log("Document successfully updated!");
        })
        .catch((error) => {
            // The document probably doesn't exist.
            console.error("Error updating document: ", error);
        });
    }
    if (bank_investment_legal_freight == 'investment') {
        db.collection("INVESTMENTS").doc(which_account).update({
            status: status
        })
        .then(() => {
            console.log("Document successfully updated!");
        })
        .catch((error) => {
            // The document probably doesn't exist.
            console.error("Error updating document: ", error);
        });
    }
    
}

function get_data(which_account){
    // remove all reds
    // 
    $('.acc_lists_ct').removeClass('sideMenuUI');
    if (which_account == 'account1') {
        console.log('Side Menu UI');
        $('.ac_1').addClass('sideMenuUI');
        whichAccount= which_account;
    }
    if (which_account == 'account2') {
        console.log('Side Menu UI -2');
        $('.ac_2').addClass('sideMenuUI');
        whichAccount= which_account;
    }

    // FOR BANK
    if (bank_investment_legal_freight == 'bank') {
        var docRef = db.collection("BANKS").doc(which_account);

        docRef.get().then((doc) => {
            if (doc.exists) {
                $('.investment_llc label').addClass('active');
                console.log("Document data:", doc.data());
                whichAccount = doc.id;
                $('#icon_holder_investment').val(doc.data().account_holder);
                $('#icon_available_balance').val(doc.data().available_balance);
                $('#icon_total_investment').val(doc.data().total_investment);
                $('#icon_total_balance').val(doc.data().total_balance);
                $('#icon_home_address_investment').val(doc.data().home_address);
                $('#icon_email_investment').val(doc.data().email);
                
                // ACCOUNT STATUS - LOCKED OR NOT
                if (doc.data().status == "active") {
                    $(['']).text('Account Locked');
                    $('#switchValue').prop('checked', true);
                }
                if (doc.data().status == "locked") {
                    $(['']).text('Account Locked');
                    $('#switchValue').prop('checked', false);
                }
                
                // CHECK VERIFICATION 
                if (doc.data().account_verified == true) {
                    $("#account_verification_checkbox").prop("checked", true);
                    console.log('verified');
                    // FIX DATA
                showAccountData(doc.data().available_balance, doc.data().account_holder);

                }
                else if (doc.data().account_verified == false) {
                    $("#account_verification_checkbox").prop("checked", false);
                    console.log('!verified');
                }
                
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
        });
    }
    // FOR INVESTMENT
    if (bank_investment_legal_freight == 'investments') {
        var docRef = db.collection("INVESTMENTS").doc(which_account);

        docRef.get().then((doc) => {
            if (doc.exists) {
                $('.investment_llc label').addClass('active');
                console.log("Document data:", doc.data());
                whichAccount = doc.id;
                $('#account_holder').val(doc.data().user);
                $('#available_balance').val(doc.data().balance);
                $('#btc_address').val(doc.data().btc_address);
                $('#transaction_date').val(doc.data().date_time);
                $('#account_directory').val(doc.data().account_dir);
              
    
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
        });
    }
}

// add new transaction
function add_new_transaction(which_account,priority,date,description,amount,
    transaction_status){
    // console.log('ACCOUNT HOLDER 2.0: ' + name);
    var db = firebase.firestore();
        if (bank_investment_legal_freight == 'bank') {
            db.collection("BANK_HISTORY").add({
                account: which_account,
                priority: priority,
                date: date,
                description: description,
                transaction_id: "",
                amount: amount,
                transaction_status: transaction_status,
            })
            .then((docRef) => {
                console.log("ACCOUNT successfully written! "+docRef + docRef.id);
                update_transaction(docRef.id);
            })
            .catch((error) => {
                console.error("Error writing ACCOUNT: ", error);
                $('.editor_navs').show();
                 $('.pldr').addClass('hide');
            });
        }
        if (bank_investment_legal_freight == 'investment') {
            db.collection("INVESTMENTS_HISTORY").add({
                account: which_account,
                priority: priority,
                date: date,
                description: description,
                transaction_id: "",
                amount: amount,
                transaction_status: transaction_status,
            })
            .then((docRef) => {
                console.log("ACCOUNT successfully written! "+docRef + docRef.id);
                update_transaction(docRef.id);
            })
            .catch((error) => {
                console.error("Error writing ACCOUNT: ", error);
                $('.editor_navs').show();
                 $('.pldr').addClass('hide');
            });
        }

}
function update_transaction(transaction_id){
    var db = firebase.firestore();
    if (bank_investment_legal_freight == 'bank') {
        db.collection("BANK_HISTORY").doc(transaction_id).update({
            transaction_id: transaction_id
        })
        .then(() => {
            console.log("Document successfully updated!");
            editor_transaction_ui();
        })
        .catch((error) => {
            // The document probably doesn't exist.
            console.error("Error updating document: ", error);
            $('.editor_navs').show();
            $('.pldr').addClass('hide');
        });
    }
    if (bank_investment_legal_freight == 'investment') {
        db.collection("INVESTMENTS_HISTORY").doc(transaction_id).update({
            transaction_id: transaction_id
        })
        .then(() => {
            console.log("Document successfully updated!");
            editor_transaction_ui();
        })
        .catch((error) => {
            // The document probably doesn't exist.
            console.error("Error updating document: ", error);
            $('.editor_navs').show();
            $('.pldr').addClass('hide');
        });
    }
    
}

// get all transactions
function get_all_transaction(){
    $('.tt_history_bd tr').remove();
    var db = firebase.firestore();
    if (bank_investment_legal_freight == 'bank') {
        db.collection("BANK_HISTORY").orderBy("priority", "desc")
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data());
                if (doc.data().account == whichAccount) {
                    appendTransaction(doc.data().priority,doc.data().date,
                    doc.data().description,doc.data().amount,doc.id);
                }
               
            });
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        });
    }
    if (bank_investment_legal_freight == 'investment') {
        db.collection("INVESTMENT_HISTORY").orderBy("priority", "desc")
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data());
                if (doc.data().account == whichAccount) {
                    appendTransaction(doc.data().priority,doc.data().date,
                    doc.data().description,doc.data().amount,doc.id);
                }
               
            });
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        });
    }
}

// GET SPECIFIC TRANSACTION
function get_this_transaction(){

    if (bank_investment_legal_freight == 'bank') {
        var docRef = db.collection("BANK_HISTORY").doc(trans_id);

        docRef.get().then((doc) => {
            if (doc.exists) {
                $('.editor_god').removeClass('hide');
                $('.EDTBTN').css('visibility', 'visible');
                console.log("transaction data:", doc.data());
               
                $('#add_transaction_priority_number').val(doc.data().priority);
                $('#add_transaction_date').val(doc.data().date);
                $('#add_transaction_description').val(doc.data().description);
                $('#add_transaction_amount').val(doc.data().amount);
    
                bank_checker = 1;
    
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
                bank_checker = 1;
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
            bank_checker = 1;
        });
    }

    if (bank_investment_legal_freight == 'investment') {
        var docRef = db.collection("INVESTMENTS_HISTORY").doc(trans_id);

        docRef.get().then((doc) => {
            if (doc.exists) {
                $('.editor_god').removeClass('hide');
                $('.EDTBTN').css('visibility', 'visible');
                console.log("transaction data:", doc.data());
               
                $('#add_transaction_priority_number').val(doc.data().priority);
                $('#add_transaction_date').val(doc.data().date);
                $('#add_transaction_description').val(doc.data().description);
                $('#add_transaction_amount').val(doc.data().amount);
    
                bank_checker = 1;
    
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
                bank_checker = 1;
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
            bank_checker = 1;
        });
    }
}
// DELETE SPECIFIC TRANSACTION 
function delete_this_transaction(){
    var db = firebase.firestore();
    if (bank_investment_legal_freight == 'bank') {
        db.collection("BANK_HISTORY").doc(trans_id).delete().then(() => {
            console.log("Document successfully deleted!");
            get_all_transaction();
        }).catch((error) => {
            console.error("Error removing document: ", error);
        });
    }
    if (bank_investment_legal_freight == 'investment') {
        db.collection("INVESTMENTS_HISTORY").doc(trans_id).delete().then(() => {
            console.log("Document successfully deleted!");
            get_all_transaction();
        }).catch((error) => {
            console.error("Error removing document: ", error);
        });
    }
}

// save this transaction
function save_this_transaction(which_account,priority,date,description,amount,
    transaction_status){
    // console.log('ACCOUNT HOLDER 2.0: ' + name);
    var db = firebase.firestore();
        if (bank_investment_legal_freight == 'bank') {
            db.collection("BANK_HISTORY").doc(trans_id).set({
                account: which_account,
                priority: priority,
                date: date,
                description: description,
                transaction_id: "",
                amount: amount,
                transaction_status: transaction_status,
            })
            .then((docRef) => {
                console.log("ACCOUNT successfully written! "+docRef + trans_id);
                editor_transaction_ui();
            })
            .catch((error) => {
                console.error("Error writing ACCOUNT: ", error);
                $('.editor_navs').show();
                 $('.pldr').addClass('hide');
            });
        }
        if (bank_investment_legal_freight == 'investment') {
            db.collection("INVESTMENTS_HISTORY").doc(trans_id).set({
                account: which_account,
                priority: priority,
                date: date,
                description: description,
                transaction_id: "",
                amount: amount,
                transaction_status: transaction_status,
            })
            .then((docRef) => {
                console.log("ACCOUNT successfully written! "+docRef + trans_id);
                editor_transaction_ui();
            })
            .catch((error) => {
                console.error("Error writing ACCOUNT: ", error);
                $('.editor_navs').show();
                 $('.pldr').addClass('hide');
            });
        }

} 
function SAVE_THIS_TRANSACTION(){
    var db = firebase.firestore();
    db.collection("INVESTMENTS_HISTORY").doc(which_account).set({
        account: whichAccount,
        amount: email,
        date: homeAddress,
        description: totalInvestment,
        priority: totalBalance,
        transaction_id: availableBalance,
        transaction_status: accountRefresh,
        status: status
    })
    .then(() => {
        console.log("ACCOUNT successfully written!");
        $('.refreshG').show();
        $('.loaderG').addClass('hide');

    })
    .catch((error) => {
        console.error("Error writing ACCOUNT: ", error);
        $('.refreshG').show();
        $('.loaderG').addClass('hide');
    });
}