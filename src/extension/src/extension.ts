// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { WorkspaceFolder, DebugConfiguration, ProviderResult, CancellationToken } from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	const factory = new NeoContractDebugAdapterDescriptorFactory();
	context.subscriptions.push(vscode.debug.registerDebugAdapterDescriptorFactory("neo-contract", factory));
}

class NeoContractDebugAdapterDescriptorFactory implements vscode.DebugAdapterDescriptorFactory {

	createDebugAdapterDescriptor(session: vscode.DebugSession, executable: vscode.DebugAdapterExecutable | undefined): vscode.ProviderResult<vscode.DebugAdapterDescriptor> {
		const config = vscode.workspace.getConfiguration("neo-debugger");
		const path = String.raw`C:\Users\harry\Source\neo\seattle\debug\src\adapter\bin\Debug\netcoreapp2.2\neo-debug-adapter.dll`;
		var args = [path];
		
		if (config.get<Boolean>("debug", false))
		{
			args.push("--debug");
		}

		if (config.get<Boolean>("log", false))
		{
			args.push("--log");
		}

		return new vscode.DebugAdapterExecutable("dotnet", args);
	}
}

// this method is called when your extension is deactivated
export function deactivate() {}
