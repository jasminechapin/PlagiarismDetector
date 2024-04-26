using System; 



public class Bubble_Sort  
{  

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
            for (int p = 0; p <= a.Length - 2; p++)
            {
                // For each other element...
                for (int i = 0; i <= a.Length - 2; i++)
                {
                    // If the element is bigger than the next one, swap.
                    if (a[i] > a[i + 1])
                    {
                        t = a[i + 1];
                        a[i + 1] = a[i];
                        a[i] = t;
                    }
                } 
            }
            // Print outro, and display sorted array.
            printOutroMsg();
            Console.WriteLine("\n"+"Sorted array :");
            foreach (int aa in a)                       
            Console.Write(aa + " ");
			Console.Write("\n"); 
            
        }

   // Display intro message.
   public static void printIntroMsg() {
       Console.WriteLine("Starting BubbleSort...");
   }
}