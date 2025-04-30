Browser("Login -").Page("Login -").Sync
Browser("Login -").Navigate "https://qa13.almoctane.com/ui/"
If Browser("Home - Advantage Bank").Page("Home - Advantage Bank").WebButton("Sign-In").Exist Then
Reporter.ReportEvent micPass, "https://qa3.almoctane.com/ui/ Sainty test live", " https://qa3.almoctane.com/ui/  is UP !"
else
	Reporter.ReportEvent micFail, "https://qa3.almoctane.com/ui/ Sainty test ", " https://qa3.almoctane.com/ui/ AUT is down or not responding" 
	ExitTest("AUT is down or not responding.")
End If
