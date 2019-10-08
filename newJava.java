public class newJava {

    public static int add(int x, int y){
        return x + y;
    }
    public static void main(String[] args){
        System.out.println("Hello World");
    
        // newJava obj = new newJava();
        // int ele = obj.add(10, 4);
        // Another obj = new Another();
        // System.out.println(obj.x);
        System.out.println(add(10, 4));
        newJavaTwo objTwo = new newJavaTwo();
        System.out.println(objTwo.y);
    }
}
