// Subtract the value of 'playerAttack' from the value of 'enemyHealth' and use that to update the value in the enemyHealth variable.
enemyHealth = enemyHealth - playerAttack;
// Log a resulting message to the console so we know that it worked.
console.log(
    playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
);

// check enemy's health
if (enemyHealth <= 0) {
    window.alert(enemyName + " HAS DIED!")
}
else { 
    window.alert(enemyName + " still has " + enemyHealth + " health left.")
}
// Subtract the value of 'enemy attack' from the value of 'playerHealth" and use that to update the value in the enemyHealth variable.
playerHealth = playerHealth - enemyAttack;
// Log a resulting message to the console so we know that it worked.
console.log(
    enemyName + " attacked " +playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
)

// check player's health
if (playerHealth <= 0) {
    window.alert(playerName + " has died!")
}
else {
    window.alert(playerName + " still has " + playerHealth + " health left.")
}




var fight = function (enemyName) {
   
    while(playerHealth > 0 && enemyHealth > 0) {

    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

    
    
    // if player choses to fight, then fight
    if (promptFight === "fight" || promptFight === "FIGHT") {
        // remove enemy's health by subtracting the amount set in the playerAttack variable
        enemyHealth = enemyHealth - playerAttack;
        console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
        );

        //check enemy's health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");
            break;
        } else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }

        // remove player's health by subtracting the amount set in the enemyAttack variable
        playerHealth = playerHealth - enemyAttack;
        console.log(
            enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
        );

        // check player's health
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
            break;
        } else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
        // if player choses to skip
    }if (promptFight === "skip" || promptFight === "SKIP") {
        // confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to skip?")
        
        // if yes (true), leave fight
        if (confirmSkip) {
            window.alert(playerName + "has decided to skip this fight. Goodbye");
            // subtract money from playerMoney for skipping
            playerMoney = playerMoney - 10;
            console.log("playerMoney",playerMoney)
            break;
        }
        // if no (false), ask question again by running fight() again
        else {
            fight()
        }
    

    } else {
        window.alert("You need to choose a valid option. Try again!");
    }
}
}