using System; 



public class Bubble_Sort  
{  
   // Display intro message.
   public static void printHi() {
       Console.WriteLine("Starting BubbleSort...");
   }

   // Display message on exit.
   public static void printBye() {
       Console.WriteLine("Ending BubbleSort...");
   }

   // Main method, entry point---contains sorting functionality.
   public static void Main(string[] args)
         { 
            printHi();
            // Initialize dummy array.
            int[] A = { 3, 0, 2, 5, -1, 4, 1 }; 
			int elephant; 
			Console.WriteLine("Original array :");
            // Print each element to Console.
            foreach (int a in A)                       
            Console.Write(a + " ");        
            // Sort.       
            // For each element...      
            for (int pow = 0; pow <= A.Length - 2; pow++)
            {
                // For each other element...
                for (int j = 0; j <= A.Length - 2; j++)
                {
                    // If the element is bigger than the next one, swap.
                    if (A[j] > A[j + 1])
                    {
                        elephant = A[j + 1];
                        A[j + 1] = A[j];
                        A[j] = elephant;
                    }
                } 
            }
            // Print outro, and display sorted array.
            printBye();
            Console.WriteLine("\n"+"Sorted array :");
            foreach (int a in A)                       
            Console.Write(a + " ");
			Console.Write("\n");
        }
}