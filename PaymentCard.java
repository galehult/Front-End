// public class PaymentCard {
//     private double balance;

//     public PaymentCard(double openingBalance) {
//         this.balance = openingBalance;
//     }

//     public void eatAffordably() {
//         if (this.balance >= 2.60) {
//             this.balance -= 2.60;
//         }
//     }

//     public void eatHeartily() {
//         if (this.balance >= 4.60) {
//             this.balance -= 4.60;
//         }
//     }

//     public void addMoney(double deposit) {
//         if (deposit < 0) {
//             return;
//         } else if (this.balance < 150) {
//             this.balance += deposit;
//             if (balance > 150) {
//                 this.balance = 150;
//             }
//         }
//     }

//     public String toString() {
//         return "The card has a balance of " + this.balance + " euros";
//     }
// }
