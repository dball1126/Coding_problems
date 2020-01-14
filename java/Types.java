import java.util.Scanner;
import java.util.*;

public class Types {
    public static void main(String[] args) {
      
        String[] things = {"eggs", "lasers", "hats", "pie"};
        List<String> list = new ArrayList<String>();

        // add array items to list

        for(String w: things)
            list.add(w);
    
        String[] moreThings = {"lasers", "hats"};
        List<String> list2 = new ArrayList<String>();

        // add array items to list2
        for(String x: moreThings)
            list2.add(x);

        editList(list, list2);
        System.out.println();

        for (int i = 0; i < list.size(); i++) {
            System.out.printf("%s ", list.get(i));
        }


    }

    public static void editList(Collection<String> l1, Collection<String> l2) {
        Iterator<String> it = l1.iterator();

        while (it.hasNext()) {
            if(l2.contains(it.next()))
                it.remove();
        }
    }
}