using AdoNetExercises;
using System;
using System.Data.SqlClient;

namespace AddMinion
{
    public class StartUp
    {
        public static void Main(string[] args)
        {
            //read minion : minion age town
            //villian:gru
            //check town
            //Add Minion
            //Check villain 
            //Add record mappingtable

            string[] minionInfo = Console.ReadLine().Split();
            string[] vilianInfo = Console.ReadLine().Split();

            string minionName = minionInfo[1];
            int age = int.Parse(minionInfo[2]);
            string townName = minionInfo[3];

            string vilianName = vilianInfo[1];

            using (SqlConnection connection = new SqlConnection(Configuration.ConnectionString))
            {


            };

        }
    }
}
