using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using OpenQA.Selenium;
using OpenQA.Selenium.Edge;
using OpenQA.Selenium.Support.UI;

namespace SeleniumExample
{
    [TestClass]
    public class EdgeDriverTest
    {
        private const string edgeDriverDirectory = ".";
        private const string budgetURL = "https://michaelkimelman.github.io/budgetcalculator/";
        private EdgeDriver browser;

        // This is run before each test.
        [TestInitialize]
        public void EdgeDriverInitialize()
        {
            browser = new EdgeDriver(edgeDriverDirectory);
            // We want to go to the same URL for all tests.
            browser.Url = budgetURL;
        }
        [TestMethod]
        public void CheckBrowser()
        {
            browser.Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(5);
            Assert.AreEqual(budgetURL, browser.Url);
        }
        [TestMethod]
        public void AddItems()
        {
            browser.Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(5);
            var budgetAmount = browser.FindElementByCssSelector("#amount-input");
            budgetAmount.SendKeys("100");
            browser.Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(5);
            var budgetCategory = browser.FindElementByCssSelector("#category-input");
            budgetCategory.SendKeys(Keys.ArrowDown);
            budgetCategory.SendKeys(Keys.ArrowDown);
            budgetCategory.SendKeys(Keys.Enter);
            browser.Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(5);
            var budgetDate = browser.FindElementByCssSelector("#date");
            budgetDate.SendKeys(Keys.ArrowDown);
            budgetDate.SendKeys(Keys.Right);
            budgetDate.SendKeys(Keys.ArrowDown);
            budgetDate.SendKeys(Keys.Right);
            budgetDate.SendKeys(Keys.ArrowDown);
            var budgetButton = browser.FindElementByCssSelector("#add-button");
            budgetButton.Click();
            var budgetItemCurrency = browser.FindElementByCssSelector("p.item-currency");
            Assert.AreEqual("100 kr", budgetItemCurrency.Text);
            var budgetItemCategory = browser.FindElementByCssSelector("h3.item-category");
            Assert.AreEqual("Housing", budgetItemCategory.Text);
            var budgetItemDate = browser.FindElementByCssSelector("p.item-date");
            Assert.AreEqual("9999-12-31", budgetItemDate.Text);

        }
        [TestMethod]
        public void CheckMonthly()
        {
            browser.Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(5);
            var budgetAmount = browser.FindElementByCssSelector("#amount-input");
            budgetAmount.SendKeys("100");
            browser.Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(5);
            var budgetCategory = browser.FindElementByCssSelector("#category-input");
            budgetCategory.SendKeys(Keys.ArrowDown);
            budgetCategory.SendKeys(Keys.ArrowDown);
            budgetCategory.SendKeys(Keys.Enter);
            browser.Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(5);
            var budgetDate = browser.FindElementByCssSelector("#date");
            budgetDate.SendKeys("2022-12-14");
            var budgetButton = browser.FindElementByCssSelector("#add-button");
            budgetButton.Click();
            var budgetReportMonth = browser.FindElementByCssSelector("#change-month-input");
            budgetReportMonth.SendKeys(Keys.ArrowDown);
            budgetReportMonth.SendKeys(Keys.Right);
            budgetReportMonth.SendKeys(Keys.ArrowDown);
            var budgetGetMonth = browser.FindElementByCssSelector("#month-button");
            budgetGetMonth.Click();
            var budgetGetMonthTotal = browser.FindElementByCssSelector("p.Total-Month");
            Assert.AreEqual("Total: 100", budgetGetMonthTotal.Text);
        }
        [TestMethod]
        public void CheckCategoryMultiple()
        {
            browser.Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(5);
            var budgetAmount = browser.FindElementByCssSelector("#amount-input");
            budgetAmount.SendKeys("100");
            browser.Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(5);
            var budgetCategory = browser.FindElementByCssSelector("#category-input");
            budgetCategory.SendKeys(Keys.ArrowDown);
            budgetCategory.SendKeys(Keys.ArrowDown);
            budgetCategory.SendKeys(Keys.Enter);
            browser.Manage().Timeouts().ImplicitWait = TimeSpan.FromSeconds(5);
            var budgetDate = browser.FindElementByCssSelector("#date");
            budgetDate.SendKeys("2022-12-14");
            var budgetButton = browser.FindElementByCssSelector("#add-button");
            budgetButton.Click();
            budgetAmount.Clear();
            budgetAmount.SendKeys("299.99");
            budgetDate.SendKeys("2021-11-14");
            budgetButton.Click();
            var budgetReportCategory = browser.FindElementByCssSelector("#see-category-input");
            budgetReportCategory.SendKeys(Keys.ArrowDown);
            budgetReportCategory.SendKeys(Keys.ArrowDown);
            budgetCategory.SendKeys(Keys.Enter);
            var budgetGetMonth = browser.FindElementByCssSelector("#category-button");
            budgetGetMonth.Click();
            var budgetGetCategoryTotal = browser.FindElementByCssSelector("p.Total-Category");
            Assert.AreEqual("Total: 399.99", budgetGetCategoryTotal.Text);
        }


        // This is run after each test.
        [TestCleanup]
        public void EdgeDriverCleanup()
        {
            browser.Quit();
        }
    }
}
