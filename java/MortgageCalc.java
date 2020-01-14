import java.text.NumberFormat;
import java.util.Date;
import java.util.Scanner;

public class MortgageCalc {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Enter your principal as an integer: ");
        Integer principal = scanner.nextInt();
        System.out.println("Enter your Annual Interest Rate as a decimal: ");
        Double interest = scanner.nextDouble();
        System.out.println("Enter your Period(years) as an integer: ");
        Integer period = scanner.nextInt();
        
        Double monthlyInterestRate = (interest / 100) / 12;
        Integer numberOfPayments = period * 12;
        Double amount = (monthlyInterestRate) * (1 + monthlyInterestRate);
        Double mortgageAmount = Math.pow(amount, numberOfPayments);
        
        System.out.println(amount);
    }
}