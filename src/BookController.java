import javax.annotation.Resource;

public class BookController {

        private Book book;

        public void create(Book book) {
            Book book1 = new Book();
           book.setBook_id();
           book.setCreated_at();
           book.setBookstore();
        }

        public void read(String book) {
            book.
        }

        public void update(Book book) throws Exception {
            session.update(namespace+".update", boaradvo);
        }


        public void delete(String book) throws Exception {
            session.delete(namespace+".delete", bno);


        }

    @RestController
    @RequestMapping("")
    public class BookController {
        private BookService bookService;

      @PostMapping("");
        public void BookCreate(BookService bookService) {

        }

    }

        
public class BookController {
    private final BookService bookservice;

    @Autowired
    public BookController(BookService bookservice) {
        this.bookservice = bookservice;
    }

    @GetMapping
    public BookVo<CreateBook> getBook(@PathVariable Long id) {
        CreateBook createbook = bookservice.getBook(id);
        return;
    }
}

