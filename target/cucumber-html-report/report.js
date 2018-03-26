$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/OrderConfirmation.feature");
formatter.feature({
  "line": 1,
  "name": "Order Confirmation",
  "description": "",
  "id": "order-confirmation",
  "keyword": "Feature"
});
formatter.before({
  "duration": 8613474349,
  "status": "passed"
});
formatter.scenario({
  "line": 2,
  "name": "Verify order confirmation page and order successful",
  "description": "",
  "id": "order-confirmation;verify-order-confirmation-page-and-order-successful",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 3,
  "name": "I open automationpractice website",
  "keyword": "When "
});
formatter.step({
  "line": 4,
  "name": "I sign in",
  "keyword": "And "
});
formatter.step({
  "line": 5,
  "name": "I select a dress and proceed to checkout",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I verify details on shoppingCart summary page",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I verify address and proceed",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I verify shipping details and proceed",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I verify payment details page and proceed",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I verify order summary page and proceed",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I verify order confirmation page details and verify success message",
  "keyword": "Then "
});
formatter.match({
  "location": "SigninSignoutContactUsSteps.i_open_automationpractice_website()"
});
formatter.result({
  "duration": 9218803744,
  "status": "passed"
});
formatter.match({
  "location": "SigninSignoutContactUsSteps.i_sign_in()"
});
formatter.result({
  "duration": 3940005572,
  "status": "passed"
});
formatter.match({
  "location": "SelectCheckoutSteps.i_select_a_dress_and_proceed_to_checkout()"
});
formatter.result({
  "duration": 10806111762,
  "status": "passed"
});
formatter.match({
  "location": "ShoppingCartSummarySteps.i_verify_details_on_shoppingCart_summary_page()"
});
formatter.result({
  "duration": 2469383937,
  "status": "passed"
});
formatter.match({
  "location": "AddressSteps.i_verify_address_and_proceed()"
});
formatter.result({
  "duration": 75648351,
  "error_message": "java.lang.AssertionError: expected:\u003cADDRESSES\u003e but was:\u003cAUTHENTICATION\u003e\r\n\tat org.testng.AssertJUnit.assertEquals(AssertJUnit.java:101)\r\n\tat org.testng.AssertJUnit.assertEquals(AssertJUnit.java:108)\r\n\tat modules.VerifyAddressProceed.Execute(VerifyAddressProceed.java:11)\r\n\tat step_definitions.AddressSteps.i_verify_address_and_proceed(AddressSteps.java:29)\r\n\tat ✽.And I verify address and proceed(features/OrderConfirmation.feature:7)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "ShippingSteps.i_verify_shipping_details_and_proceed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PaymentSteps.i_verify_payment_details_page_and_proceed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "OrderSummarySteps.i_verify_order_summary_page_and_proceed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "OrderConfirmationSteps.i_verify_order_confirmation_page_details_and_verify_success_message()"
});
formatter.result({
  "status": "skipped"
});
formatter.write("Current Page URL is http://automationpractice.com/index.php?controller\u003dauthentication\u0026multi-shipping\u003d0\u0026display_guest_checkout\u003d0\u0026back\u003dhttp%3A%2F%2Fautomationpractice.com%2Findex.php%3Fcontroller%3Dorder%26step%3D1%26multi-shipping%3D0");
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 1664277213,
  "status": "passed"
});
formatter.uri("features/OrderSummary.feature");
formatter.feature({
  "line": 1,
  "name": "Order Summary",
  "description": "",
  "id": "order-summary",
  "keyword": "Feature"
});
formatter.before({
  "duration": 7224383230,
  "status": "passed"
});
formatter.scenario({
  "line": 2,
  "name": "Verify order Summary page and proceed",
  "description": "",
  "id": "order-summary;verify-order-summary-page-and-proceed",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 3,
  "name": "I open automationpractice website",
  "keyword": "When "
});
formatter.step({
  "line": 4,
  "name": "I sign in",
  "keyword": "And "
});
formatter.step({
  "line": 5,
  "name": "I select a dress and proceed to checkout",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I verify details on shoppingCart summary page",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I verify address and proceed",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I verify shipping details and proceed",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I verify payment details page and proceed",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I verify order summary page and proceed",
  "keyword": "Then "
});
formatter.match({
  "location": "SigninSignoutContactUsSteps.i_open_automationpractice_website()"
});
formatter.result({
  "duration": 6717099994,
  "status": "passed"
});
formatter.match({
  "location": "SigninSignoutContactUsSteps.i_sign_in()"
});
formatter.result({
  "duration": 3685272491,
  "status": "passed"
});
formatter.match({
  "location": "SelectCheckoutSteps.i_select_a_dress_and_proceed_to_checkout()"
});
formatter.result({
  "duration": 11633229012,
  "status": "passed"
});
formatter.match({
  "location": "ShoppingCartSummarySteps.i_verify_details_on_shoppingCart_summary_page()"
});
formatter.result({
  "duration": 2454529741,
  "status": "passed"
});
formatter.match({
  "location": "AddressSteps.i_verify_address_and_proceed()"
});
formatter.result({
  "duration": 72090972,
  "error_message": "java.lang.AssertionError: expected:\u003cADDRESSES\u003e but was:\u003cAUTHENTICATION\u003e\r\n\tat org.testng.AssertJUnit.assertEquals(AssertJUnit.java:101)\r\n\tat org.testng.AssertJUnit.assertEquals(AssertJUnit.java:108)\r\n\tat modules.VerifyAddressProceed.Execute(VerifyAddressProceed.java:11)\r\n\tat step_definitions.AddressSteps.i_verify_address_and_proceed(AddressSteps.java:29)\r\n\tat ✽.And I verify address and proceed(features/OrderSummary.feature:7)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "ShippingSteps.i_verify_shipping_details_and_proceed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PaymentSteps.i_verify_payment_details_page_and_proceed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "OrderSummarySteps.i_verify_order_summary_page_and_proceed()"
});
formatter.result({
  "status": "skipped"
});
formatter.write("Current Page URL is http://automationpractice.com/index.php?controller\u003dauthentication\u0026multi-shipping\u003d0\u0026display_guest_checkout\u003d0\u0026back\u003dhttp%3A%2F%2Fautomationpractice.com%2Findex.php%3Fcontroller%3Dorder%26step%3D1%26multi-shipping%3D0");
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "duration": 1559109732,
  "status": "passed"
});
formatter.uri("features/Payment.feature");
formatter.feature({
  "line": 1,
  "name": "Payment",
  "description": "",
  "id": "payment",
  "keyword": "Feature"
});
formatter.before({
  "duration": 7154829282,
  "status": "passed"
});
formatter.scenario({
  "line": 2,
  "name": "Verify payment page and proceed",
  "description": "",
  "id": "payment;verify-payment-page-and-proceed",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 3,
  "name": "I open automationpractice website",
  "keyword": "When "
});
formatter.step({
  "line": 4,
  "name": "I sign in",
  "keyword": "And "
});
formatter.step({
  "line": 5,
  "name": "I select a dress and proceed to checkout",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I verify details on shoppingCart summary page",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I verify address and proceed",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I verify shipping details and proceed",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I verify payment details page and proceed",
  "keyword": "Then "
});
formatter.match({
  "location": "SigninSignoutContactUsSteps.i_open_automationpractice_website()"
});
formatter.result({
  "duration": 6504919429,
  "status": "passed"
});
formatter.match({
  "location": "SigninSignoutContactUsSteps.i_sign_in()"
});
formatter.result({
  "duration": 4741775546,
  "status": "passed"
});
formatter.match({
  "location": "SelectCheckoutSteps.i_select_a_dress_and_proceed_to_checkout()"
});
formatter.result({
  "duration": 11295122362,
  "status": "passed"
});
formatter.match({
  "location": "ShoppingCartSummarySteps.i_verify_details_on_shoppingCart_summary_page()"
});
formatter.result({
  "duration": 2191947088,
  "status": "passed"
});
formatter.match({
  "location": "AddressSteps.i_verify_address_and_proceed()"
});
formatter.result({
  "duration": 48301210,
  "error_message": "java.lang.AssertionError: expected:\u003cADDRESSES\u003e but was:\u003cAUTHENTICATION\u003e\r\n\tat org.testng.AssertJUnit.assertEquals(AssertJUnit.java:101)\r\n\tat org.testng.AssertJUnit.assertEquals(AssertJUnit.java:108)\r\n\tat modules.VerifyAddressProceed.Execute(VerifyAddressProceed.java:11)\r\n\tat step_definitions.AddressSteps.i_verify_address_and_proceed(AddressSteps.java:29)\r\n\tat ✽.And I verify address and proceed(features/Payment.feature:7)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "ShippingSteps.i_verify_shipping_details_and_proceed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PaymentSteps.i_verify_payment_details_page_and_proceed()"
});
formatter.result({
  "status": "skipped"
});
formatter.write("Current Page URL is http://automationpractice.com/index.php?controller\u003dauthentication\u0026multi-shipping\u003d0\u0026display_guest_checkout\u003d0\u0026back\u003dhttp%3A%2F%2Fautomationpractice.com%2Findex.php%3Fcontroller%3Dorder%26step%3D1%26multi-shipping%3D0");
formatter.embedding("image/png", "embedded2.png");
formatter.after({
  "duration": 1608454636,
  "status": "passed"
});
formatter.uri("features/SelectCheckout.feature");
formatter.feature({
  "line": 1,
  "name": "Select and checkout a dress",
  "description": "",
  "id": "select-and-checkout-a-dress",
  "keyword": "Feature"
});
formatter.before({
  "duration": 6106313645,
  "status": "passed"
});
formatter.scenario({
  "line": 2,
  "name": "Select summer dress and proceed to checkout",
  "description": "",
  "id": "select-and-checkout-a-dress;select-summer-dress-and-proceed-to-checkout",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 3,
  "name": "I open automationpractice website",
  "keyword": "When "
});
formatter.step({
  "line": 4,
  "name": "I sign in",
  "keyword": "And "
});
formatter.step({
  "line": 5,
  "name": "I select a dress and proceed to checkout",
  "keyword": "Then "
});
formatter.match({
  "location": "SigninSignoutContactUsSteps.i_open_automationpractice_website()"
});
formatter.result({
  "duration": 7922222327,
  "status": "passed"
});
formatter.match({
  "location": "SigninSignoutContactUsSteps.i_sign_in()"
});
formatter.result({
  "duration": 4388264773,
  "status": "passed"
});
formatter.match({
  "location": "SelectCheckoutSteps.i_select_a_dress_and_proceed_to_checkout()"
});
formatter.result({
  "duration": 10352975070,
  "status": "passed"
});
formatter.after({
  "duration": 1201290356,
  "status": "passed"
});
formatter.uri("features/Shipping.feature");
formatter.feature({
  "line": 1,
  "name": "Shipping and proceed",
  "description": "",
  "id": "shipping-and-proceed",
  "keyword": "Feature"
});
formatter.before({
  "duration": 6410846740,
  "status": "passed"
});
formatter.scenario({
  "line": 2,
  "name": "Verify shipping and proceed",
  "description": "",
  "id": "shipping-and-proceed;verify-shipping-and-proceed",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 3,
  "name": "I open automationpractice website",
  "keyword": "When "
});
formatter.step({
  "line": 4,
  "name": "I sign in",
  "keyword": "And "
});
formatter.step({
  "line": 5,
  "name": "I select a dress and proceed to checkout",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I verify details on shoppingCart summary page",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I verify address and proceed",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I verify shipping details and proceed",
  "keyword": "Then "
});
formatter.match({
  "location": "SigninSignoutContactUsSteps.i_open_automationpractice_website()"
});
formatter.result({
  "duration": 5550529723,
  "status": "passed"
});
formatter.match({
  "location": "SigninSignoutContactUsSteps.i_sign_in()"
});
formatter.result({
  "duration": 4901582240,
  "status": "passed"
});
formatter.match({
  "location": "SelectCheckoutSteps.i_select_a_dress_and_proceed_to_checkout()"
});
formatter.result({
  "duration": 10399161546,
  "status": "passed"
});
formatter.match({
  "location": "ShoppingCartSummarySteps.i_verify_details_on_shoppingCart_summary_page()"
});
formatter.result({
  "duration": 2350636426,
  "status": "passed"
});
formatter.match({
  "location": "AddressSteps.i_verify_address_and_proceed()"
});
formatter.result({
  "duration": 62993493,
  "error_message": "java.lang.AssertionError: expected:\u003cADDRESSES\u003e but was:\u003cAUTHENTICATION\u003e\r\n\tat org.testng.AssertJUnit.assertEquals(AssertJUnit.java:101)\r\n\tat org.testng.AssertJUnit.assertEquals(AssertJUnit.java:108)\r\n\tat modules.VerifyAddressProceed.Execute(VerifyAddressProceed.java:11)\r\n\tat step_definitions.AddressSteps.i_verify_address_and_proceed(AddressSteps.java:29)\r\n\tat ✽.And I verify address and proceed(features/Shipping.feature:7)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "ShippingSteps.i_verify_shipping_details_and_proceed()"
});
formatter.result({
  "status": "skipped"
});
formatter.write("Current Page URL is http://automationpractice.com/index.php?controller\u003dauthentication\u0026multi-shipping\u003d0\u0026display_guest_checkout\u003d0\u0026back\u003dhttp%3A%2F%2Fautomationpractice.com%2Findex.php%3Fcontroller%3Dorder%26step%3D1%26multi-shipping%3D0");
formatter.embedding("image/png", "embedded3.png");
formatter.after({
  "duration": 1581333956,
  "status": "passed"
});
formatter.uri("features/ShoppingCartSummary.feature");
formatter.feature({
  "line": 1,
  "name": "Shopping Cart summary page verification",
  "description": "",
  "id": "shopping-cart-summary-page-verification",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5325479508,
  "status": "passed"
});
formatter.scenario({
  "line": 2,
  "name": "Verify values on shopping cart summary page",
  "description": "",
  "id": "shopping-cart-summary-page-verification;verify-values-on-shopping-cart-summary-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 3,
  "name": "I open automationpractice website",
  "keyword": "When "
});
formatter.step({
  "line": 4,
  "name": "I sign in",
  "keyword": "And "
});
formatter.step({
  "line": 5,
  "name": "I select a dress and proceed to checkout",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I verify details on shoppingCart summary page",
  "keyword": "Then "
});
formatter.match({
  "location": "SigninSignoutContactUsSteps.i_open_automationpractice_website()"
});
formatter.result({
  "duration": 6291451206,
  "status": "passed"
});
formatter.match({
  "location": "SigninSignoutContactUsSteps.i_sign_in()"
});
formatter.result({
  "duration": 3396526059,
  "status": "passed"
});
formatter.match({
  "location": "SelectCheckoutSteps.i_select_a_dress_and_proceed_to_checkout()"
});
formatter.result({
  "duration": 12309687009,
  "status": "passed"
});
formatter.match({
  "location": "ShoppingCartSummarySteps.i_verify_details_on_shoppingCart_summary_page()"
});
formatter.result({
  "duration": 2454526094,
  "status": "passed"
});
formatter.after({
  "duration": 1237101176,
  "status": "passed"
});
formatter.uri("features/SigninSignoutContactUs.feature");
formatter.feature({
  "line": 1,
  "name": "Shopping cart on an e-commerce website",
  "description": "",
  "id": "shopping-cart-on-an-e-commerce-website",
  "keyword": "Feature"
});
formatter.before({
  "duration": 6482399457,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Sign im and sign out",
  "description": "",
  "id": "shopping-cart-on-an-e-commerce-website;sign-im-and-sign-out",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I open automationpractice website",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "I sign in",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I sign out",
  "keyword": "Then "
});
formatter.match({
  "location": "SigninSignoutContactUsSteps.i_open_automationpractice_website()"
});
formatter.result({
  "duration": 7084594127,
  "status": "passed"
});
formatter.match({
  "location": "SigninSignoutContactUsSteps.i_sign_in()"
});
formatter.result({
  "duration": 4261138185,
  "status": "passed"
});
formatter.match({
  "location": "SigninSignoutContactUsSteps.i_sign_out()"
});
formatter.result({
  "duration": 118381015,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"link text\",\"selector\":\"Sign out\"}\n  (Session info: chrome\u003d64.0.3282.186)\n  (Driver info: chromedriver\u003d2.33.506120 (e3e53437346286c0bc2d2dc9aa4915ba81d9023f),platform\u003dWindows NT 10.0.16299 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 44 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.44.0\u0027, revision: \u002776d78cf323ce037c5f92db6c1bba601c2ac43ad8\u0027, time: \u00272014-10-23 13:11:40\u0027\nSystem info: host: \u0027DESKTOP-B8AN0BT\u0027, ip: \u0027192.168.2.142\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_151\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.33.506120 (e3e53437346286c0bc2d2dc9aa4915ba81d9023f), userDataDir\u003dC:\\Users\\123\\AppData\\Local\\Temp\\scoped_dir11116_29408}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d64.0.3282.186, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 871ac9a405a607e9298c44bf7d8a86c3\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:204)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:156)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:599)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:352)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByLinkText(RemoteWebDriver.java:401)\r\n\tat org.openqa.selenium.By$ByLinkText.findElement(By.java:242)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:344)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:59)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:37)\r\n\tat com.sun.proxy.$Proxy13.click(Unknown Source)\r\n\tat modules.SignoutAction.Execute(SignoutAction.java:10)\r\n\tat step_definitions.SigninSignoutContactUsSteps.i_sign_out(SigninSignoutContactUsSteps.java:53)\r\n\tat ✽.Then I sign out(features/SigninSignoutContactUs.feature:6)\r\n",
  "status": "failed"
});
formatter.write("Current Page URL is http://automationpractice.com/index.php?controller\u003dauthentication");
formatter.embedding("image/png", "embedded4.png");
formatter.after({
  "duration": 1657041020,
  "status": "passed"
});
formatter.before({
  "duration": 7479093702,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Contact Us Action",
  "description": "",
  "id": "shopping-cart-on-an-e-commerce-website;contact-us-action",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "I open automationpractice website",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I perform contact us actions",
  "keyword": "Then "
});
formatter.match({
  "location": "SigninSignoutContactUsSteps.i_open_automationpractice_website()"
});
formatter.result({
  "duration": 6051986589,
  "status": "passed"
});
formatter.match({
  "location": "SigninSignoutContactUsSteps.I_perform_contact_us_actions()"
});
formatter.result({
  "duration": 3685148138,
  "status": "passed"
});
formatter.after({
  "duration": 1210293021,
  "status": "passed"
});
formatter.uri("features/VerifyAddress.feature");
formatter.feature({
  "line": 1,
  "name": "Verify Address",
  "description": "",
  "id": "verify-address",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4811692707,
  "status": "passed"
});
formatter.scenario({
  "line": 2,
  "name": "Verify address in the workflow and proceed",
  "description": "",
  "id": "verify-address;verify-address-in-the-workflow-and-proceed",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 3,
  "name": "I open automationpractice website",
  "keyword": "When "
});
formatter.step({
  "line": 4,
  "name": "I sign in",
  "keyword": "And "
});
formatter.step({
  "line": 5,
  "name": "I select a dress and proceed to checkout",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I verify details on shoppingCart summary page",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I verify address and proceed",
  "keyword": "Then "
});
formatter.match({
  "location": "SigninSignoutContactUsSteps.i_open_automationpractice_website()"
});
formatter.result({
  "duration": 4404907686,
  "status": "passed"
});
formatter.match({
  "location": "SigninSignoutContactUsSteps.i_sign_in()"
});
formatter.result({
  "duration": 3833365546,
  "status": "passed"
});
formatter.match({
  "location": "SelectCheckoutSteps.i_select_a_dress_and_proceed_to_checkout()"
});
formatter.result({
  "duration": 9714425488,
  "status": "passed"
});
formatter.match({
  "location": "ShoppingCartSummarySteps.i_verify_details_on_shoppingCart_summary_page()"
});
formatter.result({
  "duration": 2090477385,
  "status": "passed"
});
formatter.match({
  "location": "AddressSteps.i_verify_address_and_proceed()"
});
formatter.result({
  "duration": 46338180,
  "error_message": "java.lang.AssertionError: expected:\u003cADDRESSES\u003e but was:\u003cAUTHENTICATION\u003e\r\n\tat org.testng.AssertJUnit.assertEquals(AssertJUnit.java:101)\r\n\tat org.testng.AssertJUnit.assertEquals(AssertJUnit.java:108)\r\n\tat modules.VerifyAddressProceed.Execute(VerifyAddressProceed.java:11)\r\n\tat step_definitions.AddressSteps.i_verify_address_and_proceed(AddressSteps.java:29)\r\n\tat ✽.Then I verify address and proceed(features/VerifyAddress.feature:7)\r\n",
  "status": "failed"
});
formatter.write("Current Page URL is http://automationpractice.com/index.php?controller\u003dauthentication\u0026multi-shipping\u003d0\u0026display_guest_checkout\u003d0\u0026back\u003dhttp%3A%2F%2Fautomationpractice.com%2Findex.php%3Fcontroller%3Dorder%26step%3D1%26multi-shipping%3D0");
formatter.embedding("image/png", "embedded5.png");
formatter.after({
  "duration": 1572257263,
  "status": "passed"
});
});