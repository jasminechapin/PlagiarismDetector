using System; 



public class Bubble_Sort  
{  
   // Display intro message.
   public static void printIntroMsg() {
       Console.WriteLine("Starting BubbleSort...");
   }

   // Display message on exit.
   public static void printOutroMsg() {
       Console.WriteLine("Ending BubbleSort...");
   }

   // Main method, entry point---contains sorting functionality.
   public static void Main(string[] args)
         { 
            printIntroMsg();
            // Initialize dummy array.
            int[] a = { 3, 0, 2, 5, -1, 4, 1 }; 
			Console.WriteLine("Original array :");
            // Print each element to Console.
            printArray(a);     
            // Sort.       
            sortArray(a);
            // Print outro, and display sorted array.
            printOutroMsg();
            Console.WriteLine("\n"+"Sorted array :");
            printArray(a);
			Console.Write("\n"); 
            
        }
    
    public static void printArray(Array a) {
        foreach (int aa in a)                       
            Console.Write(aa + " ");
    }

    public static void sortArray(Array A) {
        int t;
        for (int p = 0; p <= A.Length - 2; p++)
            {
                // For each other element...
                for (int i = 0; i <= A.Length - 2; i++)
                {
                    // If the element is bigger than the next one, swap.
                    if (A[i] > A[i + 1])
                    {
                        t = A[i + 1];
                        A[i + 1] = A[i];
                        A[i] = t;
                    }
                } 
            }
    }
}