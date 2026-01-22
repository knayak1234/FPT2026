'use client'

import { motion } from 'framer-motion'

const invitedSpeakers = [
  { id: 1, name: "Dr. Jitendra Kumar Pradhan", affiliation: "Rajendra University, Balangir" },
  { id: 2, name: "Dr. Sudipta Mahana", affiliation: "Rajdhani College, Bhubaneswar" },
  { id: 3, name: "Dr. Pankaj Kumar Sahoo", affiliation: "Dhenkanal Autonomous College, Dhenkanal" },
  { id: 4, name: "Dr. Subrat Biswal", affiliation: "KKS Women's College, Balasore" },
  { id: 5, name: "Dr. Ranjana Rani Das", affiliation: "Rourkela Autonomous College, Rourkela" },
  { id: 6, name: "Dr. Jogesh Rout", affiliation: "Shreeram College, Rampur" },
  { id: 7, name: "Dr. Ranjita Mohapatra", affiliation: "Rajdhani College, Bhubaneswar" },
]

export default function InvitedSpeakers() {
  return (
    <section id="invited-speakers" className="section-dark py-20 bg-gradient-to-br from-dark-bg via-primary/10 to-secondary/10 dark:bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 pb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent leading-relaxed">
            Invited Speakers
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass rounded-2xl p-8 backdrop-blur-md max-w-4xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {invitedSpeakers.map((speaker) => (
              <div
                key={speaker.id}
                className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors"
              >
                <span className="text-primary font-bold text-lg">{speaker.id}.</span>
                <div>
                  <h4 className="text-white font-semibold">{speaker.name}</h4>
                  <p className="text-gray-300 text-sm">{speaker.affiliation}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 text-center">
            <p className="text-gray-300 text-sm italic">
              * More names will be added soon
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
