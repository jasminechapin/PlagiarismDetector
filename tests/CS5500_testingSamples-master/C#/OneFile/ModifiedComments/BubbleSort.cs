using System; 



public class Bubble_Sort  
{  
   // Show introductory text.
   public static void printIntroMsg() {
       Console.WriteLine("Starting BubbleSort...");
   }

   // Print text for when programmer exits.
   public static void printOutroMsg() {
       Console.WriteLine("Ending BubbleSort...");
   }

   // Primary function and point of entry.
   public static void Main(string[] args)
         { 
            printIntroMsg();
            // Initialize silly array.
            int[] a = { 3, 0, 2, 5, -1, 4, 1 }; 
			int t; 
			Console.WriteLine("Original array :");
            foreach (int aa in a)                       
            Console.Write(aa + " ");        
            // Sort.           
            for (int p = 0; p <= a.Length - 2; p++)
            {
                for (int i = 0; i <= a.Length - 2; i++)
                {
                    if (a[i] > a[i + 1])
                    {
                        // Swap!
                        t = a[i + 1];
                        a[i + 1] = a[i];
                        a[i] = t;
                    }
                } 
            }
            printOutroMsg();
            Console.WriteLine("\n"+"Sorted array :");
            // This for loop is weird.
            foreach (int aa in a)                       
            Console.Write(aa + " ");
			Console.Write("\n"); 
            
        }
}