const { EmbedBuilder } = require('discord.js');

const kmsList = require('../../util/kms.json');
const jmsList = require('../../util/jms.json');
const tmsList = require('../../util/tms.json');

const KMS_DIFFICULTY_CHOICES = Object.keys(kmsList["difficulty"]).map(key => {
  return { name: key, value: key }
});

const JMS_DIFFICULTY_CHOICES = Object.keys(jmsList["difficulty"]).map(key => {
  return { name: key, value: key }
});

const TMS_DIFFICULTY_CHOICES = Object.keys(tmsList["difficulty"]).map(key => {
  return { name: key, value: key }
});

module.exports = {
  data: {
    name: 'translate',
    description: 'Translates to other languages',
    options: [
      {
        name: 'kms',
        description: 'Translates to Korean',
        type: 2,
        options: [
          {
            name: 'map',
            description: 'Translates Map rotation for Job in KMS',
            type: 1,
            options : [
              {
                name: 'job',
                description: 'Select Job',
                type: 3,
                required: true,
                autocomplete: true
              },
              {
                name: 'map',
                description: 'Select Map',
                type: 3,
                required: true,
                autocomplete: true
              }
            ],
          },
          {
            name: 'boss',
            description: 'Translates Boss run for Job in KMS',
            type: 1,
            options : [
              {
                name: 'job',
                description: 'Select Job',
                type: 3,
                required: true,
                autocomplete: true
              },
              {
                name: 'boss',
                description: 'Select Boss',
                type: 3,
                required: true,
                autocomplete: true
              },
              {
                name: 'difficulty',
                description: 'Select the appropriate difficulty for the boss (can be left blank)',
                type: 3,
                required: false,
                choices: KMS_DIFFICULTY_CHOICES
              },
            ],
          }
        ]
      }, 
      {
        name: 'jms',
        description: 'Translates to Japanese',
        type: 2,
        options: [
          {
            name: 'map',
            description: 'Translates Map rotation for Job in JMS',
            type: 1,
            options : [
              {
                name: 'job',
                description: 'Select Job',
                type: 3,
                required: true,
                autocomplete: true
              },
              {
                name: 'map',
                description: 'Select Map',
                type: 3,
                required: true,
                autocomplete: true
              }
            ],
          },
          {
            name: 'boss',
            description: 'Translates Boss run for Job in JMS',
            type: 1,
            options : [
              {
                name: 'job',
                description: 'Select Job',
                type: 3,
                required: true,
                autocomplete: true
              },
              {
                name: 'boss',
                description: 'Select Boss',
                type: 3,
                required: true,
                autocomplete: true
              },
              {
                name: 'difficulty',
                description: 'Select the appropriate difficulty for the boss (can be left blank)',
                type: 3,
                required: false,
                choices: JMS_DIFFICULTY_CHOICES,
              }
            ],
          }
        ]
      },
      {
        name: 'tms',
        description: 'Translates to Chinese',
        type: 2,
        options: [
          {
            name: 'map',
            description: 'Translates Map rotation for Job in TMS',
            type: 1,
            options : [
              {
                name: 'job',
                description: 'Select Job',
                type: 3,
                required: true,
                autocomplete: true
              },
              {
                name: 'map',
                description: 'Select Map',
                type: 3,
                required: true,
                autocomplete: true
              }
            ],
          },
          {
            name: 'boss',
            description: 'Translates Boss run for Job in TMS',
            type: 1,
            options : [
              {
                name: 'job',
                description: 'Select Job',
                type: 3,
                required: true,
                autocomplete: true
              },
              {
                name: 'boss',
                description: 'Select Boss',
                type: 3,
                required: true,
                autocomplete: true,
              },
              {
                name: 'difficulty',
                description: 'Select the appropriate difficulty for the boss (can be left blank)',
                type: 3,
                required: false,
                choices: TMS_DIFFICULTY_CHOICES,
              }
            ],
          }
        ]
      },
    ],
  },
  async execute(interaction) {
    const { options } = interaction;
    const subCommandGroup = options.getSubcommandGroup();
    const subCommand = options.getSubcommand();

    const job = options.getString('job');
    const map = options.getString('map');
    const boss = options.getString('boss');
    const difficulty = options.getString('difficulty');

    let description = "";
    let result = "";
    let solo_result = "";
    let lazy_result = "";

    if (subCommandGroup === 'kms') {
      description += `Maplestory: ${kmsList["general"]["Maplestory"]}\n`;
      result += `${kmsList["general"]["Maplestory"]} `;

      if (subCommand === 'boss') {
        solo_result += `${kmsList["general"]["Maplestory"]} `;

        description += `${job}: ${kmsList["job"][job]}\n`;
        result += `${kmsList["job"][job]} `;
        solo_result += `${kmsList["job"][job]} `;

        if (difficulty !== null) {
          description += `${difficulty}: ${kmsList["difficulty"][difficulty]}\n`;
          result += `${kmsList["difficulty"][difficulty]}`;
          solo_result += `${kmsList["difficulty"][difficulty]}`;
        }

        description += `${boss}: ${kmsList["boss"][boss]}\n`;
        result += `${kmsList["boss"][boss]}`;
        solo_result += `${kmsList["boss"][boss]} `;

        description += `Solo: ${kmsList["general"]["Solo"]}`;
        solo_result += `${kmsList["general"]["Solo"]}`;
      }
      else if (subCommand === 'map') {
        lazy_result += `${kmsList["general"]["Maplestory"]} `;

        description += `${job}: ${kmsList["job"][job]}\n`;
        result += `${kmsList["job"][job]} `;
        lazy_result += `${kmsList["job"][job]} `;

        description += `${map}: ${kmsList["map"][map]}\n`;
        result += `${kmsList["map"][map]}`;
        lazy_result += `${kmsList["map"][map]} `;

        description += `Lazy Farming: ${kmsList["general"]["Lazy Farming"]}`;
        lazy_result += `${kmsList["general"]["Lazy Farming"]}`;
      }
    }
    else if (subCommandGroup === 'jms') {
      description += `Maplestory: ${jmsList["general"]["Maplestory"]}\n`;
      result += `${jmsList["general"]["Maplestory"]} `;

      if (subCommand === 'boss') {
        solo_result += `${jmsList["general"]["Maplestory"]} `;

        description += `${job}: ${jmsList["job"][job]}\n`;
        result += `${jmsList["job"][job]} `;
        solo_result += `${jmsList["job"][job]} `;

        if (difficulty !== null) {
          description += `${difficulty}: ${jmsList["difficulty"][difficulty]}\n`;
          result += `${jmsList["difficulty"][difficulty]}`;
          solo_result += `${jmsList["difficulty"][difficulty]}`;
        }

        description += `${boss}: ${jmsList["boss"][boss]}\n`;
        result += `${jmsList["boss"][boss]}`;
        solo_result += `${jmsList["boss"][boss]} `;

        description += `Solo: ${jmsList["general"]["Solo"]}`;
        solo_result += `${jmsList["general"]["Solo"]}`;
      }
      else if (subCommand === 'map') {
        lazy_result += `${jmsList["general"]["Maplestory"]} `;

        description += `${job}: ${jmsList["job"][job]}\n`;
        result += `${jmsList["job"][job]} `;
        lazy_result += `${jmsList["job"][job]} `;

        description += `${map}: ${jmsList["map"][map]}\n`;
        result += `${jmsList["map"][map]}`;
        lazy_result += `${jmsList["map"][map]} `;

        description += `Lazy Farming: ${jmsList["general"]["Lazy Farming"]}`;
        lazy_result += `${jmsList["general"]["Lazy Farming"]}`;
      }
    }
    else if (subCommandGroup === 'tms') {
      description += `Maplestory: ${tmsList["general"]["Maplestory"]}\n`;
      result += `${tmsList["general"]["Maplestory"]} `;

      if (subCommand === 'boss') {
        solo_result += `${tmsList["general"]["Maplestory"]} `;

        description += `${job}: ${tmsList["job"][job]}\n`;
        result += `${tmsList["job"][job]} `;
        solo_result += `${tmsList["job"][job]} `;

        if (difficulty !== null) {
          description += `${difficulty}: ${tmsList["difficulty"][difficulty]}\n`;
          result += `${tmsList["difficulty"][difficulty]}`;
          solo_result += `${tmsList["difficulty"][difficulty]}`;
        }

        description += `${boss}: ${tmsList["boss"][boss]}\n`;
        result += `${tmsList["boss"][boss]}`;
        solo_result += `${tmsList["boss"][boss]} `;

        description += `Solo: ${tmsList["general"]["Solo"]}`;
        solo_result += `${tmsList["general"]["Solo"]}`;
      }
      else if (subCommand === 'map') {
        lazy_result += `${tmsList["general"]["Maplestory"]} `;

        description += `${job}: ${tmsList["job"][job]}\n`;
        result += `${tmsList["job"][job]} `;
        lazy_result += `${tmsList["job"][job]} `;

        description += `${map}: ${tmsList["map"][map]}\n`;
        result += `${tmsList["map"][map]}`;
        lazy_result += `${tmsList["map"][map]} `;

        description += `Lazy Farming: ${tmsList["general"]["Lazy Farming"]}`;
        lazy_result += `${tmsList["general"]["Lazy Farming"]}`;
      }
    }
    
    const embed = new EmbedBuilder()
      .setColor('Green')
      .setDescription(`${description}`);

    if (subCommand === 'boss') {
      embed.addFields(
        { name: "Query (For Mobile):", value: `${result}`},
        { name: "Query Solo (For Mobile):", value: `${solo_result}`},
        { name: "Query:", value: "```" + `${result}` + "```"},
        { name: "Query Solo:", value: "```" + `${solo_result}` + "```"}
      );
    }
    else {
      embed.addFields(
        { name: "Query (For Mobile):", value: `${result}`},
        { name: "Query Lazy Farming (For Mobile):", value: `${lazy_result}`},
        { name: "Query:", value: "```" + `${result}` + "```"},
        { name: "Query Lazy Farming:", value: "```" + `${lazy_result}` + "```"}
      );
    }

    await interaction.reply({ embeds: [embed] });
  }
};
