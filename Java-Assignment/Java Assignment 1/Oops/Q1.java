 //implement student class 
    class Student {
         String name;
         int rollNo;
         int marks;
    
        public Student(String name, int rollNo, int marks) {
            this.name = name;
            this.rollNo = rollNo;
            this.marks = marks;
        }
        public void displayDetails() {
            System.out.println("Name: " + name);
            System.out.println("Roll Number: " + rollNo);
            System.out.println("Marks: " + marks);
        }
        
    }
    class GraduateStudent extends Student {
        String researchTopic;
        public GraduateStudent(String name, int rollNo, int marks, String researchTopic) {
            super(name, rollNo, marks); 
            this.researchTopic = researchTopic;
        }

        public void displayDetails() {
            super.displayDetails();
            System.out.println("Research Topic: " + researchTopic);
        }
    
    }
    public class Q1{
        public static void main(String[] args) {
            //student class
            Student s1 = new Student("Pakhi", 101, 91);
            s1.displayDetails();
            
            //inherted class 
            System.out.println();
            GraduateStudent gs1 = new GraduateStudent("Ridhi", 11, 90, "Machine Learning");
            gs1.displayDetails();

        }
    }