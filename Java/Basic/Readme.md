1. Basic
2. Collection
3. Hibernate
4. JDBC
5. Servlet
6. Spring
7. JWT



Basic
Object Oriented Programming:- oops is a methedlogy or way of writing a program in which Data and its Behaviour is
blinded into a single unit that is called class. And Data and its behaviour is accessed by it Object by creating new keyword
in java.
There is Four main Pillers of Object Oriented Programming
1)Encapsulation:- Binding Data and its behaviour into single unit is called Encapsulation. In java Encapsulation in
achieved by modifier. 
Advantage:- Advantage of Encapsulation is Data can be secured . a class is said to be tightly Encapsulated when each
data member is private.
2)Abstraction:- HighLighting the set of Service and Hiding Internal Implemention is called Abstraction.
In Java Abstraction can be achieved by Interface and Abstract Class.
Advantage :- advantage of Abstraction is that we can hide our implemention, so source code can not be change from out
side of the package.
3)Inheritance :- Inheritance is a mechanism in which one object Acquires all the property and behaviours of parent
object. In java Inheritance can be achieved by extends keyword.
Advtange:-Re use ability of the code . programmer has to not write code again again. Overriding , abstraction
Types of inheritance:- single , multilevel , hirerical inehretance , multiple ineritance
4) Polymorphism:- Polymorphism means one name but multiple form . in object oriented programming it is used to
increase the readability of the code. Overloading and Overriding is the example of Polymorphism.
Overloding :- when a class have multiple method with same name but different argument, so those method is called is
called is called overloaded method
Overloading is used when we require multiple behaviour.
Overriding :- when supper class and sub class have methods with same name and same number of argument so supper
class method is called in subclass it has been overridden by subclass .




Design pattern:-
Singleton Design pattern:- it is creational design pattern that restrict the instantiation of a class to a single object.
Singleton classes are those classes, whose objects are created only once. And with only that object the class members can be
accessed.
Factory Design pattern:- in Factory Design pattern is a creational design pattern . that aim to create the object. Basically
this design pattern helps to make our application loosely couple. And it helps also to hide the implmentaion of business
logic. It says that if u have a multiple object which are related to each other and some functionality of all object are same
so use abstract class or interface just like account and give implementation of multiple object like saving ,
currentAccount. Don’t give direct access to your implementation class to client , give factory class and give all
responsibility to your factory class to create the object of its based on the argument.
Abstract Factory Design Pattern:- the concept of its same as Factory Design pattern but here we have multiple factory
class. Each factory class would responsible to create some group or family of objects.
Here one factory class depends on other factory class to create the object.
Builder Design Pattern:- Basically this design pattern overcome the problem of factory design pattern
Ex 1:- problem 1 is there if factory class creating object but there is need to pass multiple parameter.
EX 2:- if there is less number of parameter the can be ok. But if there is more number of parameter and some parameter
are optional then this design fails over there.
So in builder pattern creates object step by step and finally return desired attribute of object.
It helps to creates immutable object. Normally it is used to create immutable object.
Prototype Design Pattern:- This Design pattern is used to where there is a creating object is heavy process and costly.
This approach saves costly resources and time , especially when creating object is costly process.
Like Database connection object , sessionFactory , when u are creating the file object and that file is large in size.
Or you are making connection with another api over the network. So these logic must not be called again again.
Java 8 New Feature:-
1) Fuctional interface
2) Stream api :- bulk data operation ,
3) Lamda expression
4) Method refrence
5) Default method:- we can extend the new method without breaking the implementation of existing
class .it is used to add new features.
6) Static method:-
7) Foreach
What is an object?
Def1: The Object is the real-time entity having some state and behavior. In Java, Object is an instance of the
class having the instance variables as the state of the object and the methods as the behavior of the object.
Def2: Object is a instance of a class. Basically object is a singluer entity of a class. Object consist on its state and
behavior. The object of a class can be created by using the new keyword.
Object states must be changed by its beviour .it is an object oriented programming rule.
What is class:-
Class is the description of an object. It is a combination of state and behavior. Or we can say that it is a blue
print of an object.
What is object:- object is an instance of class . we can say in another word it is an example of class. We can say
in another way like class is plurals and object is singular.
Solid Principal:- Solid principal are the basic principal for software development. If the programmer take
cares these principal inside the application, then that application is considered as loosely coupled application.
Developer can change easily one part of the program without disturbing the existing implementation.
Single Responsibility principal:- this principal states that one compenent(class) must have only
single responsibility. If it will handle multiple states of object so, we will require to change again and again.
In another words we can say that changing of object states and behavior there should be only one purpose.
Example :- inside the employee class we can write the states of its address like city, states , country but if in
future if we required to change or adding extra states inside it ,that is against to single responsibility principal.
Because object is for employee and when we require to change in address ,so we are changing in employee
object.
Open for extension and close for modification:-
The component should be always open for extension and it should be close for modification in existing
implementation.
It says that u should design your component like that u can add new behavior without changing in existing
implementation.
This can be done only by extend keyword or if the class is final but still we are require for that if the class is
implementing any interface , so that in that interface we can provide default method.
Liskov Substitution Pricipal:-
if S is the subtype of T so object of S must be replaceable with object of T.
it says indirectly that if there is a relation ship between the class like it is doing inheriting so we always refer the
subclass object by its super class reference.
Interface Segregation Principal:- the client should not be forced to implementing all the method of
an interface.
In another words we can say that in an interface we should give the declaration of un necessary method if its
not required.
Difference between Exception and Error
1. Can be rcover using try and catch but error can not be recover in the program.
2. Exception causes due to un wanted things happen in program . but error occurs due to system in which
program is being executed
3. Exception are checked and unchecked type. But error is uncheck type only
4. Compiler knows about some exception therefore it force to handle it . but about error compiler does
not know.
Thread:-
Exceuting multiple task simultaneously where each task is independent part of the same program that is called
thread.
Thread is the basic unit of execution it refer to a function . thread shares instance variable and static variable of
an object . but it does not share to local variable of object method.
In java Thread can be implemented by two ways first that implement runnable interface or second way to
extends direct thread class.
If custom class is extending thread class . so it will lose the inheritance concept because it cant further extends
another class.
If we call thread class start method then after thread scheduler register that thread , and after that it is on
thread scheduler that when it will give the chance to particular thread.
Thread Lifecycle:-
So when the thread object is created , until it finish its task it goes to different different cycle or states that is
New :-
Runnable states:-
Running:-
Wait/ Block
Terminated/Dead States
DeadLock :- it is a situation where 2 or more thread are waiting each other to release the resources
Ex: we have t1 and t2. T1 having a lock of object 1 and T2 having a lock over object 2.
Both thread are waiting for each other to get realse to resources. See fig of greeksforgreeks
object level lock vs. class level lock :-
Every object has unique lock if a thread has to execude synchronized method of object before that it has to get lock to
execute synchronized method. Object level lock is for non static method and instance block
Same as if static method is synchronized than thread will be needed for class level lock to execute static method. Class
level lock is for static block and static method.
Object method wait, notify and notifyAll
Theses three method are used to inter thread communication in synchronized block or method.
Wait : if any thread calls wait method it causes the current thread running to release the lock and goes for waiting state.
And another thread acquire the lock of that of if it call notify than waiting thread again acquire the lock and complete it's
execution.
Notify : if a thread calls notify method it says that this thread is realseing the lock and it gives notifications to another
thraed to acquire the object
why wait notify and notify All
 These three method are used for inter thread communication while thread access object synchro method or block.
Every class object has a unique lock in java . So every object can have synchronized method or block. To get call.
 Collection
Collection framework:-
In Java, a collection is a framework that provides an architecture for storing and manipulating a collection of objects. In JDK
1.2, a new framework called "Collection Framework" was created, which contains all of the collection classes and interfaces.
In Collection framework , Collection is the root interface that also extends Iterable interface which support advance for loop,
The interfaces which are extending Collection interface are List , Set , Queue. each interface used in collection framework for
different purpose. Like List interface allows duplicate element , Set interface does not allow to store duplicate element where as
queue Interface works on FIFO principal.
List:- the classes which is implanting List interface that is ArrayList , LinkedList , Vector ,Stack
ArrayList:- 1) ArrayList allows duplicate element because this property comes through List Interface and also this class is
implementing List interface.
2)It also maintains insertion order . 3)it internally implements dynamic resizeable array. Basically it is an array but as per the
insertion and deletion arrayList can grow and shrink
4)it provides Add and remove method to add and delete the object from ArrayList.
5)we can traverse the array list by for loop , Advance ForLoop , Iterator (it has iterator() methods that return Iterator object ,
Inside Iterator Interface we have hasNext() , next() method) , listIterator(with the help of this object we can traverse from
forward and backward from both side). And last one is forEach() that takes the argument type of Consumer Type.
LinkedList:-1) Lisnked List is a class of Collection framework which implement List Interface . it allows duplicate element
2)it also maintain Insertion order 3) It internally implement Doubly Linked list . Object Stored in the form of node means that
One object or element will not be stored in Contiguous Location.
4)it is slow as compare to Array list in Searching , but Insertion and deletion is better as compare to Array List .
Vector :- 1)It allows to duplicate element , maintain insertion order 2)It is synchronized means that it is Thread safe
3)It implement Enumerable that is used for traversing.
4)It internally implements Dynamic Resize able Array
Stack:- 1) stack is a class which extends Vector class. It works basically on List-In-First-Out principal.
2)Stack Contains all the method of Vector class and also it has it owns method like Push , Pop , Peek
3) we can use iterator() method to traverse it.
Queue Interface:- 1) the classes which Impalements Queue Interface are Priority Queue , De queue , Array Queue,
These classes works on First In First out Principal. These classes is used to order Application, Ticket Booking etc
PriorityQueue:- 1) It is a class which implement Queue Interface.
2)It does not allow to store null values
Dequeue :- 1)It is an interface that extends Queue Interface .In Dequeue we can add element and remove element from both
side .
Set:- Set is an interface . it does not allow duplicate element . The classes which implement set interface are HashSet,
LikendHashSet , TreeSet
HashSet:- 1)It is a class which Implement Set interface . 2) It does not allow duplicay , it maintain insertion order.
2) Internally it uses HasMap to Store element .whatever data we insert in HashSet that is stored as a key in HashMap, and we
know that in HashMap key does not repeated.
3) HashSet provide add and remove method to insert and delete the elements.
LinkedHashSet:-1) It internally Impelemt LinkedList
2)It extends The HashSet Class and Implement Set Interface
3)It contains the unique element and it maintains the insertion order and permits null value.
SortedSet:- it is an interface that extends set interface . and TreeSet is a class which impellents SortedSet interface.
Basically this interface helps to store the element is sorted order.
2)Tree set this class has uique elemet , does not maintain Insertion order, 3) it internally it use Binary search Tree to Store the
element so , TC is log(n).
Map:- 1)Map is an interface , but this interface is not implementing Collection interface. This interface allows to store the object
in key and value form. HashMap and TreeMap these classes implements this interface .this Interface and classes which is
implementing this interface are presents in java.utill package.
HashMap:- 1)HashMap this class implements map interface . it is presents in java.utill package
2) HashMap does not allow to duplicate element if we try to insert it element is replaced to previous one.
3) it internally impellents two data structure first is dynamic Array that is called bucket and second is LinkedList. If we insert the
object in key and value form the key is passed to hash function it gives the hashCode Number .some bit operation is done with
that hashcode number then we get bucket number that is nothing but index number of dynamic array . object is stored in at
that returned index number.
4)it provides put method to insert element and same method is used to update as well. Remove method is used to delete the
element.
LinkedHashMap:-1) LinkedHashMap this class extends HashMap class and implement Map interface therefore its object also
store element in key and value form.
2) but it maintains insertion order.
3)HashMap provides advantage of quick insertion , search and deletion but it never maintained insertion order which Linked
HashMap provides.
TreeMap:-1)TreeMap this class implements SortedMap that helps to elements keeps in sorted order. By default elements is
sorted by its keys.
2) we can make sorting object based on Custom logic using Comparator
Hibernate
Automatic Dirty Checking:- when we get object by its id . the object which get from database it becomes in persistence
context. Hibernate creates it’s clone of object outside the persistence context. And if we change the name so changes
happens in out side persistence context object. Lets we give the name that the object which is inside persistence context
that is state 1 object and outside is state 2 (Transient state )object. Right now after changing state 1 and state 2 object id
is same but there is field assume student name is different . hibernate automatic does dirty checking between state 1
and state2 object if it finds any changes it fires update in database if we call commit or flush to database. Then changes
get reflect.
Case 2:- assume that we are changing the student name in detached state of std1(object name of Student Type) means
that session one you have closed . then same object state will get change that would be considered as detched state .
but what I am doing over here that I am opening the new session and I am forced fully giving std1 to new session so
hibernate will issue this time update query. Here hibernate issue update query because you did’nt bring same std1
object from database in new session.
Case 3: NONUniqueObjectException:- hibernate is saying over here that I have already in new session student type
object thats id is 1 and u are saying to me student type object which is also have same id 1 so inside i cant keep same id
2 object.
So solution is over here that not to use update instead we can use merge method of JPA. Because when we call merge
method so hibernate will not directly fetch student type object of id 1. First it see that whether object is in detached
state or not if it is in detached state so same object is moved to persistence context of new session.
Q) @GeneratedValue (strategy=GenerationType.Identity) here we are saying to hibernate that how id value would be
generated .the value of id is generated by mysql and that mysql generated value mapped to id.
GenerationType.Auto
GenerationType.Sequence :- This strategy uses a database sequence to generate unique primary key values.
Before persisting an entity, the application requests the next value from the sequence and assigns it as the primary key.
What is Hibernate:- Hibernate is object relational mapping tool. Basically it maps model class to data base table.
It is a implementation of jpa. Jpa is standards but hibernate is it's implementation. In hibernate there is two object is
very important first is sessionfectory and session.
Advantage :- hibernate does the lazy loading and eager loading as per the requirement. Hibernate support first level
cache by default. Hibernate does batch processing means it fires all query only in one time because of this performance
of an application with database gets improved. It support HQL and HCQL.
Session and SessionFactory :-
1.Session extends entityManager
2.SessionFactory extends EntityManagerFactory
3. hibernate.cfg.xml file we used to configuring with data base. So when we start our application hibernate read the data
from cfg file and create the sessionFectory object.
SessionFeactory = new configuration.Configure().buildSessionFactory()
4. Session session = sessionFectory.openSession();
5. transaction tx = session.beginTransaction();
6. tx.commit() -> session.flush() + commit the tx
7. Transaction object only required when we are doing DML operation like save,
update and delete not for select get().
Hibernate State:-
1) Transient State:- every simple java object state is transient state
2) Persistence Context:- when we call session.Save() and we pass object to save
method at that time object state get changed it moves to transient state to
persistence context state.
3) Detached state:- so basically when object becomes under session object that
state is called persistence context. When we call session.close() method or
when session object becomes unreached able at that time object state is
called Detached state.
Difference between Session and SessionFactory Object:-
1) Session extends Entity Manager both are interface . Entity Manager is
interface of Jpa
2) Session Factory extends Entity manager Factory ,both are interface
3) Session is light weight object while Session factory Object is heavy weight
object because it keeps configuration meta data.
4) Session is not a imutable object but session factory is the mutable ton
object.
5) Sessionfaectory is thread safe while session is not thread safe
Difference between Save and Persist:-
1) Save is the session method while persist is the Entity Manager method
2) Save method return Serializable object while persist method return void
Annotation Of hibernate
1) Entity
2) Table
3) Id
4) Generated value
5) Column
6) NotNull
7) Transient
8) Type
9) size
10) One To many
11) Many to one
12) Many to many
13) Inheritance
14) One to one
Hibernate hbm.2dll property:-
1) update
2) create Update
3) Create drop
4) Validate :- it validate any column is missing or not , it checks data type
Hibernate and Jpa crud method:-
Hibernate method:-
1) Save()
2) Update()
3) saveorUpdate()
4) delete()
5) evict()
6) clear()
7) get()
Jpa method:-
1)persist()
2) merge() works for all state like persistence context , transient , detached
3) remove
4) load
Sql date vs util date:-
1) sql date only have date while util date have time also
Inheritance:- suppose we have payment(amt , date) basically it tells about cash
payment. And we have 2 sub class of it card payment and cheque payment
1) first approach is Hibernate table per Hierachy
for all three classes only single table is created and we have one extra
column which is called discriminator column basically this tables helps to
separate the row between cash payment , card payment , cheque payment
we use two annotation for base class we use @ Inheritance ( strategy=
strategy type. Single_table) and second on each class we will give
discriminator value (value =” cash”)
2) second approach is Table per concrete class
for every single table column will be repeat use @ Inheritance ( strategy=
strategy type. Table per class)
3) Third approach is Table per sub class:- when we use this strategy so column
will not get repeat in sub class.
Basically some relation will be made between parent class table to subclass
table using foreign key.
use @ Inheritance ( strategy= strategy type.joined)
N+1 problem:-
1) Suppose that there is employee class and my employee class dependent on
address object. So we will use one to one relation ship to getting mapping
in side data base. By default hibernate support lazy loading . when I will
get the object of employee it will not retrieve the object of address. So
that when I will call get method on address object at that time it will fire
query select * from add where emp_add_id=1 so basically it is firing for
each employee 1 extra query that is called N+1 problem . it can be resovled
by using fetch type= eagar
Named Query:-
Hibernate Named query feature tell us write query once and use it again gain.
Hibernate Query language:-
Hql is same as Sql. But when we use Hql to laod that data from data base we are
not depend on database. We don’t use database table name , and column . we
totally become independent on database. Hibernate tells us use to entity name
and its property to retrieve the data from data base . Hibernate check query
and it is complied if the query is wrong we get compile time error. If it write
then hibernate convert hql to sql . and data is retrieved from database.
 JDBC
JDBC :- Jdbc stands for java database connectivity. Jdbc is java api to connect java application to database.
Jdbc is a part of java standard addition. Jdbc api uses jdbc driver to connect with the database. There are four types of
jdbc driver .
1. Jdbc-odbc bridge driver , 2. Native driver 2. Network protocol driver 4. Thin driver
Driver :- driver is a software or program that converts java call to data base call and database call tojava call.
Basically there are five steps to connect java application to database.
1. Register the Driver class :- first of all in application we will register the driver. Which type of driver we are going
to use. Oracle driver or mysql driver. For that we use DriverManager class. It is component of jdbc api and also
the member of java.sql package. It act as userinterface between user (application) and driver. Once we have
done the registeration then after we get connection from Driver Manager.
2. Create connection:- since we are connected with mysql driver or registered mysql driver, so that it gives the
connection for mysql data base. But we need to pass the url , username and password. url we pass that where
our database is running or port number we pass.
Connection is an interface. And driver manager returns the implementing class object. Connection provides
many method such that commit , rollback , setAutoCommit etc. it act as factory of statement object.
Its method is createStatement that return statement object.
3. Create statement:- in jdbc api statement is an interface that provides methods to execute the queries. And it is
factory of result set object.
Methods:- executeQuery(String sql) , returns ResultSet object executeUpdate(String sql) (this methods is used
for insertion , deletion and update query) it returns integer value
4. Execute Query :- basically when we execute the query it returns Result set object.
The object of resultSet maintains a curser poiting to a row of a table . initially curser points to befor the first row.
Next():- move to cursor next row and returns Boolean.
getInt u can pass in this method as an argument integer column index or string column name.
get String
5. Close connection
Servlet
What is Servlet :- Servlet is a technology or it is a set of interface and class that is used to
create the web application. Or to create the dynamic web page.
To execute the servlet we require to vender that is also called as implementation like tomcat ,
glassfish server. That provides servlet container . that basically does at run time it creates
servlet class object ,initialize it and maintains the life cycle of servlet object.
Servlet Hierarchy :- 1) servlet(interface)
2) Generic Servlet (class) it is protocol independent servlet.
3) HttpServlet (class) this way is used when we are following only httpservlet request.
It has two method doGet(httpServletRequest req , httpServletResponse res )
doPost( httpServletRequest req , httpServletResponse res)
Servlet Life Cycle by chatGPT:-
When it comes to servlets, which are a Java technology used for building web applications, the init and
destroy methods are designed to be executed only once during the lifecycle of a servlet, while the service
method is called repeatedly to handle multiple requests.
1. Initialization (init method):
o When a servlet is first loaded by the web container (e.g., when the server starts or when the
servlet is accessed for the first time), the init method is called to initialize the servlet.
o This method is executed only once, regardless of how many requests are made to the servlet.
o It is typically used to perform one-time setup tasks, such as establishing database connections,
initializing resources, or loading configuration data.
o Once the init method completes, the servlet is ready to handle requests.
2. Request handling (service method):
o For each request made to the servlet, the service method is called to process the request and
generate a response.
o The service method receives the request object and response object as parameters and contains
the logic to handle the request.
o The servlet container (e.g., Apache Tomcat) automatically dispatches each request to the
appropriate servlet instance.
o The service method can be called concurrently for multiple requests, allowing the servlet to
handle requests from different users simultaneously.
o The servlet container manages the threading and concurrency aspects, ensuring that multiple
requests are handled independently.
3. Cleanup (destroy method):
o When the servlet is no longer needed, such as when the server is shutting down or the servlet is
being removed from the web application, the destroy method is called.
o This method is executed only once, similar to the init method.
o It allows the servlet to perform cleanup tasks, such as closing database connections, releasing
resources, or saving data before it is destroyed.
o The destroy method gives the servlet an opportunity to gracefully shut down and release any
resources it might have acquired during its lifecycle.
To summarize, the init and destroy methods of a servlet are executed only once, during the servlet's
initialization and cleanup phases, respectively. On the other hand, the service method is called repeatedly for
each request made to the servlet, allowing it to handle multiple requests concurrently
Servlet Advantage:-
1. Better performance: because it creates a thread for each request, not process.
2. Portability: because it uses Java language.
3. Robust: JVM manages Servlets, so we don't need to worry about the memory leak, garbage collection,
etc.
4. Secure: because it uses java language.
ServletConfig and ServletContext Object:-
Servlet Config Object is created of each servlet . but Servlet Context object is created only one time. The same object is
used again again in each servlet.
Basically these object is used to define constant values for the application. If we will write constant value inside servlet
that would be hard coded. If we are using multiple time we would need to change again again.that reduces the read
bility of the program.
Servlet:- parent servlet interface:- it defines servlet life cycle methods such as init , service , destroy
Generic servlet :- class it implements servlet interface, generic servlet is used when we are not dependent on
httpservlet request and response object. It takes all type of request and sends response.
HttpServlet:- class it extends Generic servelet. It is used to http request and response. When we have get , post , put and
delete method request.
Spring
Bean Validation :- @notnull @min @max @size(string length) @email @not Empty
@Valid :- we use after that when Spring container desterilize object it get to know that it has to validate that object
Exception :- Method Argument Not Valid Exception
We use Bean validaion2.0 api . Hibernate bean validator is also implementation of Bean validation 2.0 api.
But we did not use Hibernate Validator. For bean validation we used dependency of spring boot stater validation . That
is supported by spring boot.
Exception Handling in Spring Boot:-
When we develop an application there becomes lot of chances to various type of Exception. So we can do handle all
exception using defining Exception handler class. Basically we use for that one annotation thats name is
@ControllerAdvice.
What is Spring Framework:-
It is an open source platform.
Sf reduces direct dependency between two components.
Sf support all java EE features and many more
Reduces the boiler plate code
Spring framework is a dependency framework. It works dependency injection design pattern. It makes java applications
loosely coupled. Spring provides IOC object.
Spring framework provides lots of module Spring jdbc, MVC, core, Spring DI. Spring templet,Jpa,Hibernate
What is Spring Boot Framework:- it works on top of Spring framework that’s way all the featured that support by spring
it also support . Spring boot have extra feature like (a) it does EnableAutoconfiguration (b) it provides starter
Dependency, because of this we are not need to maintain version of jars. (c) it provides inbuilt autocat tom server
(d)Spring boot support actuator that is useful to check health of application. E) spring boot provides spring initialize
that simplifies project setup.
Dependence injection :- dependency inject is a software design principal in which an object is define it is dependent on
another object. At runtime spring container create the object and inject dependent bean. It makes our application
loosely couple.
Example :- SessionFactory is dependent on dataSource object . and data source object configuration data is provided
inside the configuration class. Data source property we can keep either from mysql or oracle.
IOC container
In the Spring Framework, an IOC (Inversion of Control) container is a core component that manages the lifecycle of
application objects, also known as beans. The Spring IOC container is responsible for creating, instantiating, configuring,
and managing the dependencies of these objects. It is also known as the Spring BeanFactory.
The Spring IOC container uses a configuration metadata to create and manage objects, which can be provided through
various sources, including XML files, Java annotations, and Java configuration classes. The configuration metadata
describes the beans, their properties, and the dependencies between them.
Spring MVC:- Spring MVC works on front controller design pattern. All the request comes to Dispatcher Servlet. It
contect to handler Mapper it is bean which is get initialized when spring application is run. This beans store url request
and controller class name in form of key and value pair. It gives at run time controller name to dispatch serverlet as per
the request comes . and that particular controller methods get called on the basis of request method . if the request is
for get so that method is called which is annotated with @ getmapping. If the request is for post then @PostMapping is
called. And every controller returns data and view object. That data is fetched and consumed in jsp page.
Spring Annotation:-
Spring boot main method is @SpringbootApplication = @EnableAutoconfiguration @ComponentScan @Configuration
Sterio type Annotation :-
@Component is parent annotation
@Controller / @RestController these four annotation define bean ans it defines role layer or component or class
@Service // programmer can easily identify if he see @Controller @Rest Controller annotated a class that particular
@Repository // is a controller layer basically controller layer handles the request url. In controller layer we define
different type of method like put method delete method , get method and post method . as per the request
corresponding method get executed.
Spring Core related Annotation :-
@Configuration
@Bean
@Autowired :-
@Qualifier ---- when ambiguity problem comes of beans . means we have 2 beans which is implementing one interface.
That problem is removed from @Qualifier(“beandId/ beanName”)
@Primary --- this annotation is used on bean .
@Lazy:- spring boot bedefault does eager loading. While inialiazation of Spring application it creates all bean which
have scope single ton. We have don’t have any scope spring keeps bydefault scope singleton
@PropertySource( this annotation is used to read the data from property file. If we have multiple file then we as an
attribute property name ) (some times we have multiple application property file like for development , production and
testing we have different application property files.)
@value (when we use this annotation spring container inject the value to particular variable)
@Configuration Property ( it is used to map keyand value to an object) (eg: we have dto class all dto filed value I have to
read from application property file then we use)
@profile ( it is used to load configuration value from specific environment eg dev property , prod property ( driverclass
name , url,username , password )
@Scope( it indicates beans scope like singleton , prototype, session , request)
Rest Api Related Annotation
@RestController :- with this annotation we define that in this particular class we exposed all http end point.
@RequestMapping :- this is an old annotation . that is used to to define which http method I am going to use. Also used
to map restcontroller as well.
@getMapping , @PostMapping , @PutMapping @DeleteMapping thses all four mapping is inherited from request
mapping. Basically these different annotation to just increase the readablitiy of an application.
@RequestBody this annotation is used to consume json object. Deserialization of object
@ResponseBody when our method is sending to frontend application json object then it is used, Serialization of object
@Pathvarible manodotry to send id from front end to server side
@RequestParam it keeps an optional
@ControllerAdvice :- this annotation is used to exception handling. It is class level exeception. When we mark class by
this annotation it inidicates that this class is made for exception handler.
@ExceptionHandler :- each method will handle single type of exception. This is method level exception.
Spring Data JpA related Exception :-
@Entity
@ Table @Coulmn @id @Generated value @NotNull @Size @Transient @One to One
AOP:- Aspect oriented programming is a way of writing program in which the codes gets repeats again again and are
not relevant to business logic ( is called Boiler plate code ) is centralized in a single class that is called aspect class.
We say to spring container by giving it to advice & say where it has to execute that boiler plate code
Boiler plate code example :- Jdbc code (Connectio, statement , resultset , handle exception , transaction management)
Authethication , logging. It is also called as infreastructure code . boiler plate code cuts the developer from business logic
@Aspect @EnableAutoProxy @Component
@Before getconncetion statement
@AfterReturning commit
@After throwing catch black rollback
@After finally
@Around in this method proceedingJointpointpjpobj will be given by Spring container ( by the object of this we can
invoke business logic)
In a same way of @Around , spring f support @Trasactional to implicit manage transaction.
Logging : @Before @AfterReturning
** proxy class will be create at run time aspect class and business class method is merged.
@Requestmapping vs @postmapping
RequestMapping is a generic annotation used to map any type of HTTP request (GET, POST, PUT, DELETE, etc.) to a
method, whereas @PostMapping is a specific annotation used to map HTTP POST requests to a method.
With @RequestMapping, you need to specify the HTTP method as an attribute of the annotation (e.g.,
@RequestMapping(value = “/my-url”, method = RequestMethod.POST)), whereas with @PostMapping, the HTTP
method is implicit and cannot be changed.
@PostMapping is more specific and makes the code more readable and self-explanatory. It explicitly indicates that the
method is handling a POST request and nothing else.
scope of bean
Single Ton the bean instance will be created only once of a particular bean id and same instance will be returned by
spring container when it is required. And it is created an during Initialization of bean.
Prototype : the bean instance will be created each time when it is required. It will not be created at Initialization time.
Request : the bean instance will be created per https request
Session : the bean instance will be created per https session
Autowiring
It is feature of spring framework enable to inject the object dependency implicitly. It internally uses setter or
constructor injection
different mode of Autowiring By Name By Type Constructor
what is maven :-
Maven is a build in automation tool. It is used for java project . In maven project we define project dependency, pulgin,
and other configuration details in pom (project object model) file. It helps to create object jar file.
JAR file is used to package Java classes and resources for use by other Java applications, while a WAR file is used to
package a web application for deployment to a web server.
JWT
Spring Security:- as we add dependency of spring security our all api get secure.when we initialize of our springboot
application then spring boot secured our all api. And it gives creates user and password to access all api. By default it
support form based authentication.
By default it gives user and password and also we can configure by ourself also by giving our own user and password.
In spring we can use either basic authentication or jwt . problem with basic authentication is that we need to send every
time to access api user and password . but it is not like with jwt. Jwt is token based authentication. With jwt we don’t
need to send again again user name and password.
JWT:- stands for json web token . jwt is mostly used for security rest apis . best way to communicate security between
client and server securely.
Jwt follows a stateless authentication mechanism.
Our token consist on three part. Header (Algo+type of token) , payload(user data or claim person data) and
signature(eccoded header+encoded payload+key)
Working:- assume I am client . I want to access any set of apis but there is security of jwt authentication . so it will ask
to me user name and password. First I will send to my username and password so it will check by jwt if I will be valid
user it will generate token and give me token. That token I will keep safely becz next time If I will have that token then
after jwt security will allow to me access another api or else it will reject to me access an apis.
This token is generated by server and sent to client . again if I have to access any other secured api of the same
application then I will send same token in header part. But before access jwt to do filters same token is valid or not ,
checks some times token time span whether it is expired or not.
Steps to Implements JWT
1. Add dependency
2. Create JWT autheticationEntryPoint implements AutheticationEntryPoint
3. Create JWTTokenHelper
It helps to do operation on token like generation , validation, expire checking
4. JWTAuthenticationFilter extends OnceRequestFilter (
Get jwt from request , validation token , get user from token , load user associated with token
Set authentication
5. Create JwtAuthResponse (sending token
6. Configure jwt in spring security config

jwt Jason web token :-
Here is no concept of session and cookie, so no need to send data on clients side or store data on server side.
Jwt is used to authenticate the user
Http request is Stateless request so when any request comes first time user will do registration
Or login so server will give it token that cab be used for next time request.
Authentication : user what ever is claiming cross checking of that claim is called Authication : authentication is a process
of verifying identity of user. Usually it is done by username and password
Authorization : it is a process of determining that what kind of action and resources a user is valid to access or perform
that. Usually it is based on types of user, role of user , group membership or others factor. 