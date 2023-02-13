import java.util.Scanner;

public class Main {
    public static void main(String[] args) {


       Book book1 = new Book();
       System.out.println(book1);
       book1.getBook_id();
       book1.getBookstore();


       Rental rental1 = new Rental();
       System.out.println(rental1);
       rental1.getHowLong();


        Scanner scanner = new Scanner(System.in);
        String Book_id;
        Book_id = scanner.nextLine();

        System.out.println(Book_id);

    }
}