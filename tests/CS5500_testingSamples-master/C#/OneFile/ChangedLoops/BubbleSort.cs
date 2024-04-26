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
			int t; 
			Console.WriteLine("Original array :");
            // Print each element to Console.
            foreach (int aa in a)                       
            Console.Write(aa + " ");        
            // Sort.       
            // For each element...    
            int p = 0;
            while(p <= a.Length - 2) {
                // For each other element...
                int i = 0;
                while (i <= a.Length - 2) {
                    // If the element is bigger than the next one, swap.
                    if (a[i] > a[i + 1])
                    {
                        t = a[i + 1];
                        a[i + 1] = a[i];
                        a[i] = t;
                    }
                    i++;
                }
                p++;
            }  
            // Print outro, and display sorted array.
            printOutroMsg();
            Console.WriteLine("\n"+"Sorted array :");
            foreach (int aa in a)                       
            Console.Write(aa + " ");
			Console.Write("\n"); 
            
        }
}