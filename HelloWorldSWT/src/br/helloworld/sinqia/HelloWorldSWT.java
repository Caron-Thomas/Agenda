package br.helloworld.sinqia;

import org.eclipse.swt.widgets.Display;
import org.eclipse.swt.widgets.Shell;

public class HelloWorldSWT {

	public static void main(String[] args) {
		Display display = new Display();
		Shell shell = new Shell();
		shell.setText("Hello World, how are you?");
		shell.open();
		while(!shell.isDisposed())
		{
			if (!display.readAndDispatch()) display.sleep();
		}
		display.dispose();
	}

}
