package module3;

public class BankingWithDraw {
    public static void main(String[] args) {
         boolean isActive = false;
         double balance = 500;
         double withDraw = 400;

         if(isActive) {
             System.out.println("Account is Active");
             if(balance >= withDraw) {
                 System.out.println("Your can with draw!");
                 System.out.println("Your remain balance: " + (balance - withDraw));
             } else {
                 System.out.println("Not enough balance");
             }
         } else {
             System.out.println("Account in inactive!");
         }

    }
}
