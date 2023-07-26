using Calculations;
using NUnit.Framework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace UnitTesting
{
    [TestFixture(10,20)]
    public class CalculationsTests
    {
       private Calculator? calculator;
       [SetUp] 
        public void SetUp()
        {
            calculator = new Calculator(n1, n2);
            Console.WriteLine("setup");
        }
        //[TestCase(10,20,Author ="Gowtham" , Description ="adding two numbers")]
        //[Order(2)]
        //public void AddTest(int n1, int n2)
        //{
        //    calculations = new Calculations(n1,n2);
        //    int res = calculations.Add();
        //    Assert.AreEqual(n1+n2, res);
        //}
        [Test]
        [Ignore("In Process",Until="2023-07-12" )]
        [Order(3)]
        public void SubTest()
        {
            Console.WriteLine("Sub");
            int res = calculator.Sub();
            Assert.AreEqual(n1-n2, res);
        }

        [TestCase]
        [Order(1)]
        public void MulTest()
        {
            Console.WriteLine("Multiplication");
            int res = calculator.Multi();
            Assert.AreEqual(n1*n2, res);
        }

        [TearDown]
        public void CloseTest()
        {
            Console.WriteLine("TearDown");
            calculator = null;
        }
    }
}
