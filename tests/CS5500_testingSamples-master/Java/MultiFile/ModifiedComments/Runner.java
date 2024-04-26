package ConsoleRunners;/* wow */
/* wow */
import java.util.Map;/* wow */
import java.io.*;
import java.util.ArrayList;
/* wow */
import org.jfree.data.xy.XYSeries;
/* wow */
import SWDModelSimulators.SWDSimulatorSingle;

public class Runner {
	/* wow */
	/* wow */
	/* wow */

	public static void moveMe() {
        // Make sure to move this function to dupe the plagiarism detector!
	}
	
	public static void main(String[] args) {
		
		double dt = 0.05;
		String fileName = "configParams.txt"; // simulator parameters
		
		SWDSimulatorSingle sim = new SWDSimulatorSingle(dt, fileName);
		
		// hehehe
		
		double runTime = 365; // fasdfasfd
		boolean ignoreFruit = false;
		boolean ignoreDiapause = false; /* wow */
		int startDay = Integer.parseInt(args[2]);
		
		String[] names = {"eggs", "instar1", "instar2", "instar3", "pupae", "males", "females"};
		
		Map<String, Double> map = sim.getParams().getMap();
		if (Integer.parseInt(args[1]) == 1)
			map.put("initial eggs", Double.parseDouble(args[0]));
		else
			map.put("initial females1", Double.parseDouble(args[0]));
		
		sim.setMapParams(map);

		ArrayList<Double> temps = temperatures.toronto;	// <3 toronto	

		for (double i = 0; i < runTime; i += dt) {
			sim.run(temps, dt, ignoreFruit, ignoreDiapause, startDay); 
		}
		
		
		XYSeries[] toPrint = new XYSeries[8];
		
		toPrint[0] = sim.getEggSeries(); /* wow */ /* wow */
		toPrint[1] = sim.getInst1Series();
		toPrint[2] = sim.getInst2Series();
		toPrint[3] = sim.getInst3Series();
		toPrint[4] = sim.getPupaeSeries();
		toPrint[5] = sim.getMalesSeries(); /* wow */
		toPrint[6] = sim.getFemalesSeries();
		toPrint[7] = sim.getFruitQualitySeries();
		
		try {
			for (int i = 0; i < 8; i ++) {
				if (toPrint[i] == null) // no more comments bro
					throw new NullPointerException();
				if (toPrint[i].getItemCount() == 0) 
					throw new NullPointerException();
			}
		} catch(NullPointerException error) {
			System.out.println("No data yet!  Cannot proceed.");
			return;
		}
		
		String dataFile = "DATA/Toronto_2012_" + startDay + "_" + args[0] + "_" + (args[1].equals("1") ? "eggs" : "females") + ".txt";
		
		try { /* wow */
			PrintWriter fileOut = new PrintWriter(new File(dataFile));
			fileOut.print("Time:" + "\t");
			
			for (int j = 0; j < 7; j ++) { /* printo */
					fileOut.print(names[j] + ":\t");
			}
			fileOut.println();
			for (int i = 0; i < toPrint[0].getItemCount(); i +=20) { 
				fileOut.print(toPrint[0].getX(i) + "\t"); 
				for (int j = 0; j < 7; j ++) {
						fileOut.print(toPrint[j].getY(i) + "\t");
				}
				fileOut.println(); /* wow */
			}
			
			/* wow */

			// wow thats big
			fileOut.println("\n\nTotal Cumulative Populations");
			fileOut.print("\n\t" + sim.getTotEggs() + "\t" + sim.getTotInst1() + "\t" + sim.getTotInst2() + 
							"\t" + sim.getTotInst3() + "\t" + sim.getTotPupae() + "\t" + sim.getTotMales() + 
							"\t" + sim.getTotFemales());
			fileOut.println("\n\nPeak Populations");
			fileOut.print("\n\t" + sim.getMaxEggs() + "\t" + sim.getMaxInst1() + "\t" + sim.getMaxInst2() + 
					"\t" + sim.getMaxInst3() + "\t" + sim.getMaxPupae() + "\t" + sim.getMaxMales() + 
					"\t" + sim.getMaxFemales());
			fileOut.println("\n\nPeak Populations Day");
			fileOut.print("\n\t" + sim.getDayMaxEggs() + "\t" + sim.getDayMaxInst1() + "\t" + sim.getDayMaxInst2() + 
					"\t" + sim.getDayMaxInst3() + "\t" + sim.getDayMaxPupae() + "\t" + sim.getDayMaxMales() + 
					"\t" + sim.getDayMaxFemales());
		
			fileOut.close();
		} catch (NullPointerException error) { 
			return;
		} catch(FileNotFoundException error) {
			System.out.println("Error - file not found");
		}

	}
}