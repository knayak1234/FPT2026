'use client'

import { useState, Fragment } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Clock, Calendar, ChevronDown, ChevronUp } from 'lucide-react'
import { timelineEvents, programmeDay1, programmeDay2, oralPresentationSchedule } from '@/lib/data'

function isBreakSlot(title: string) {
  const lower = title.toLowerCase()
  return lower.includes('lunch break') || lower.includes('tea break') || lower.includes('photo session') ||
    lower.includes('registration') || lower.includes('inauguration') || lower.includes('cultural') ||
    lower.includes('valedictory') || (lower.includes('break') && (lower.includes('poster') || lower.includes('session')))
}

function isSpecialSession(title: string) {
  const lower = title.toLowerCase()
  return lower.includes('invited/oral presentation') || lower.includes('oral presentation of participants')
}

export default function Timeline() {
  const [oralScheduleExpanded, setOralScheduleExpanded] = useState(false)
  return (
    <section id="schedule" className="section-dark py-20 bg-gradient-to-br from-dark-bg via-primary/10 to-secondary/10 dark:bg-dark-bg">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Important Dates - Compact Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent text-center">
            Important Dates
          </h2>
          <div className="schedule-table-container rounded-2xl overflow-hidden shadow-xl border border-white/10 schedule-important-dates">
            <table className="w-full text-left text-sm schedule-table">
              <thead>
                <tr className="schedule-thead-row">
                  <th className="px-3 py-3 font-semibold w-1/3 schedule-th">
                    <span className="inline-flex items-center gap-2">
                      <Calendar className="w-4 h-4 opacity-90" />
                      Date
                    </span>
                  </th>
                  <th className="px-3 py-3 font-semibold schedule-th">Event</th>
                </tr>
              </thead>
              <tbody className="schedule-tbody text-gray-100">
                {timelineEvents.map((event) => (
                  <tr key={event.id} className="schedule-row hover:bg-white/10 transition-colors border-b border-white/5">
                    <td className="px-3 py-2.5 font-medium schedule-td schedule-time-cell">{event.date}</td>
                    <td className="px-3 py-2.5 schedule-td">{event.title}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Timetable */}
        <motion.div
          id="timetable"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent text-center">
            Timetable
          </h2>
          <p className="text-center text-gray-300 mb-8 schedule-venue text-base">Venue: RN-32 (C.V. Raman Seminar Hall) unless noted</p>

          {/* Day 1 */}
          <div className="schedule-table-container rounded-2xl overflow-hidden shadow-xl border border-white/10 mb-8 schedule-programme-card">
            <div className="schedule-day-header schedule-day-header-centered">
              <span className="schedule-day-accent" />
              <h3 className="text-xl font-bold schedule-day-title">
                Day 1 — 31st January 2026
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm min-w-[640px] schedule-table">
                <thead>
                  <tr className="schedule-thead-row">
                    <th className="px-3 py-2.5 font-semibold w-28 whitespace-nowrap schedule-th">
                      <span className="inline-flex items-center gap-1.5"><Clock className="w-4 h-4" /> Time</span>
                    </th>
                    <th className="px-3 py-2.5 font-semibold schedule-th">Session / Talk</th>
                    <th className="px-3 py-2.5 font-semibold hidden sm:table-cell min-w-[220px] w-64 schedule-th">Speaker / Affiliation</th>
                  </tr>
                </thead>
                <tbody className="schedule-tbody text-gray-100">
                  {programmeDay1.map((slot, idx) => (
                    <Fragment key={idx}>
                      <tr
                        className={`border-b border-white/5 transition-colors schedule-row ${idx % 2 === 1 ? 'schedule-row-alt' : ''} ${isBreakSlot(slot.title) ? 'schedule-row-break' : ''} ${isSpecialSession(slot.title) ? 'schedule-row-special' : ''}`}
                      >
                        <td className="px-3 py-2.5 whitespace-nowrap font-medium schedule-td schedule-time-cell">{slot.time}</td>
                        <td className="px-3 py-2.5 schedule-td schedule-talk-cell">
                          {isBreakSlot(slot.title) ? (
                            <span className="schedule-break-highlight">{slot.title}</span>
                          ) : isSpecialSession(slot.title) ? (
                            <button
                              type="button"
                              onClick={() => setOralScheduleExpanded((e) => !e)}
                              className="inline-flex items-center gap-2 w-full text-left focus:outline-none focus:ring-2 focus:ring-primary/50 rounded"
                            >
                              <span className="schedule-special-highlight">{slot.title}</span>
                              {oralScheduleExpanded ? <ChevronUp className="w-5 h-5 shrink-0 schedule-th" /> : <ChevronDown className="w-5 h-5 shrink-0 schedule-th" />}
                            </button>
                          ) : (
                            slot.title
                          )}
                        </td>
                        <td className="px-3 py-2.5 hidden sm:table-cell text-xs schedule-td schedule-speaker-cell">
                          {slot.speaker ? (
                            <span className="inline-block px-2 py-1.5 rounded-lg bg-primary/15 border border-primary/30 text-gray-200 schedule-speaker-badge min-w-[200px]">
                              <span className="font-semibold text-white block whitespace-nowrap">{slot.speaker}</span>
                              {slot.affiliation && <span className="text-gray-300 block">{slot.affiliation}</span>}
                            </span>
                          ) : null}
                        </td>
                      </tr>
                      {isSpecialSession(slot.title) && (
                        <tr key={`${idx}-oral`}>
                          <td colSpan={3} className="p-0 align-top border-b border-white/5 bg-white/[0.02]">
                            <AnimatePresence>
                              {oralScheduleExpanded && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: 'auto', opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.25 }}
                                  className="overflow-hidden"
                                >
                                  <div className="px-3 py-3 schedule-oral-inner">
                                    <p className="text-xs text-gray-400 mb-2">Date: 31.01.2026 · Time: 2:00–5:00 PM · Venue: RN-77</p>
                                    <table className="w-full text-left text-xs schedule-table oral-schedule-table">
                                      <thead>
                                        <tr className="schedule-thead-row oral-thead-row">
                                          <th className="px-2 py-2 font-semibold w-24 whitespace-nowrap schedule-th">Time</th>
                                          <th className="px-2 py-2 font-semibold schedule-th">Author / Presenter</th>
                                          <th className="px-2 py-2 font-semibold schedule-th">Title of Abstract</th>
                                        </tr>
                                      </thead>
                                      <tbody className="schedule-tbody oral-tbody">
                                        {oralPresentationSchedule.map((item, i) => (
                                          <tr key={i} className={`border-b border-white/10 oral-row ${i % 2 === 1 ? 'oral-row-alt' : ''}`}>
                                            <td className="px-2 py-1.5 whitespace-nowrap font-medium schedule-td oral-time-cell">{item.time}</td>
                                            <td className="px-2 py-1.5 schedule-td oral-author-cell">
                                              <span className="oral-author-name">{item.author}</span>
                                              <br />
                                              <span className="oral-author-affiliation">{item.affiliation}</span>
                                            </td>
                                            <td className="px-2 py-1.5 schedule-td oral-title-cell">{item.title}</td>
                                          </tr>
                                        ))}
                                      </tbody>
                                    </table>
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </td>
                        </tr>
                      )}
                    </Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Day 2 */}
          <div className="schedule-table-container rounded-2xl overflow-hidden shadow-xl border border-white/10 schedule-programme-card">
            <div className="schedule-day-header schedule-day-header-centered">
              <span className="schedule-day-accent" />
              <h3 className="text-xl font-bold schedule-day-title">
                Day 2 — 1st February 2026
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm min-w-[640px] schedule-table">
                <thead>
                  <tr className="schedule-thead-row">
                    <th className="px-3 py-2.5 font-semibold w-28 whitespace-nowrap schedule-th">
                      <span className="inline-flex items-center gap-1.5"><Clock className="w-4 h-4" /> Time</span>
                    </th>
                    <th className="px-3 py-2.5 font-semibold schedule-th">Session / Talk</th>
                    <th className="px-3 py-2.5 font-semibold hidden sm:table-cell min-w-[220px] w-64 schedule-th">Speaker / Affiliation</th>
                  </tr>
                </thead>
                <tbody className="schedule-tbody text-gray-100">
                  {programmeDay2.map((slot, idx) => (
                    <tr
                      key={idx}
                      className={`border-b border-white/5 transition-colors schedule-row ${idx % 2 === 1 ? 'schedule-row-alt' : ''} ${isBreakSlot(slot.title) ? 'schedule-row-break' : ''} ${isSpecialSession(slot.title) ? 'schedule-row-special' : ''}`}
                    >
                      <td className="px-3 py-2.5 whitespace-nowrap font-medium schedule-td schedule-time-cell">{slot.time}</td>
                      <td className="px-3 py-2.5 schedule-td schedule-talk-cell">
                        {isBreakSlot(slot.title) ? (
                          <span className="schedule-break-highlight">{slot.title}</span>
                        ) : isSpecialSession(slot.title) ? (
                          <span className="schedule-special-highlight">{slot.title}</span>
                        ) : (
                          slot.title
                        )}
                      </td>
                      <td className="px-3 py-2.5 hidden sm:table-cell text-xs schedule-td schedule-speaker-cell">
                        {slot.speaker ? (
                          <span className="inline-block px-2 py-1.5 rounded-lg bg-primary/15 border border-primary/30 text-gray-200 schedule-speaker-badge min-w-[200px]">
                            <span className="font-semibold text-white block whitespace-nowrap">{slot.speaker}</span>
                            {slot.affiliation && <span className="text-gray-300 block">{slot.affiliation}</span>}
                          </span>
                        ) : null}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
