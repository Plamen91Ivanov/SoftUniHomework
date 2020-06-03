 namespace Restourant.Beverages
{
    public class Beverage : Product
    {
        public Beverage(string name, decimal price,double milliliters) 
            : base(name, price)
        {
            this.Mililliters = milliliters;
        }

        public  double Mililliters { get; }
    }
}
