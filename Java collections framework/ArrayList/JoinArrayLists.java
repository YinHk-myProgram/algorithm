import java.util.ArrayList;

//combine two ArrayLists into one ArrayList
public class JoinArrayLists {
  
  public ArrayList<E> al = new ArrayList<E>();
  
  public ArrayList<E> combineLists(ArrayList<E> l1, ArrayList<E> l2) {
      al.addAll(l1);
      al.addAll(l2);
      return al;
  };
  
}
