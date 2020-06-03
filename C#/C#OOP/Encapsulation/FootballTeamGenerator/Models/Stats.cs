
using FootballTeamGenerator.Common;
using System;

namespace FootballTeamGenerator.Models
{
    public class Stats
    {
        private const int STAT_MIN_VALUE = 0;
        private const int STAT_MAX_VALUE = 100;



        private int endurance;
        private int sprint;
        private int dribble;
        private int passing;
        private int shooting;

        public Stats()
        {

        }

        public int Endurance 
        {
            get
            {
                return this.endurance;
            }
            set
            {
                ValidateStat(value,nameof(this.Endurance));
                this.endurance = value;
            }
        }

        public int Sprint
        {
            get
            {
                return this.sprint;
            }
            private set
            {
                this.ValidateStat(value, nameof(this.Sprint));
                this.sprint = value;
            }
        }

        public int Dribble
        {
            get
            {
                return this.dribble;
            }
            private set
            {
                this.ValidateStat(value, nameof(this.Dribble));

            }
        }

        private void ValidateStat(int value,string statName)
        {
            if (value < STAT_MIN_VALUE || value > STAT_MAX_VALUE)
            {
                string excMsg = String.Format(ExceptionMessages
                    .InvalidStatExceptionMessage, statName,
                    STAT_MIN_VALUE,
                    STAT_MAX_VALUE);
                throw new ArgumentException(excMsg);

            }
        }
    }
}
