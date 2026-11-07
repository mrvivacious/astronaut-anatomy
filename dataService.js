import { nasa } from './data.js';
import { passesFilters } from './filterService.js';

// ─── Existing functions ───────────────────────────────────────────────────────

export function getGroupNames() {
  return Object.keys(nasa);
}

export function getGroup(name) {
  return nasa[name];
}

export function getTotalNumberOfAstronauts() {
  return getGroupNames().reduce((sum, name) => {
    return sum + getGroup(name).astronauts.length;
  }, 0);
}

export function getDegreeCounts(filters = {}) {
  const counts = {};
  getGroupNames().forEach(name => {
    getGroup(name).astronauts.forEach(astronaut => {
      if (!passesFilters(astronaut, filters)) return;
      const degree = astronaut.highest_degree;
      if (degree) {
        counts[degree] = (counts[degree] || 0) + 1;
      }
    });
  });
  return counts;
}

// Updated: now accepts a filters parameter so the donut chart respects active
// filters (gender, degree). If no filters are passed it behaves identically to
// the old version.
export function getMilitaryCounts(filters = {}) {
  let military = 0;
  let civilian = 0;
  getGroupNames().forEach(name => {
    getGroup(name).astronauts.forEach(astronaut => {
      if (!passesFilters(astronaut, filters)) return;
      if (astronaut.military) {
        military++;
      } else {
        civilian++;
      }
    });
  });
  return { military, civilian };
}

// Stub — tracking not yet implemented
export function getGenderCounts() {
  return null;
}

// ─── New functions for V2 ─────────────────────────────────────────────────────

/**
 * Returns the total number of applications across all groups that have
 * an `applications_received` field. Used by the selectivity stat card.
 */
export function getTotalApplications() {
  return getGroupNames().reduce((sum, name) => {
    return sum + (getGroup(name).applications_received || 0);
  }, 0);
}

/**
 * Returns a map of { [degreeCategory]: count } for astronauts that pass the
 * given filters. Each astronaut's `degrees` array is expected to contain
 * objects with a `category` string field.
 */
export function getFieldOfStudyCounts(filters = {}) {
  const counts = {};
  getGroupNames().forEach(name => {
    getGroup(name).astronauts.forEach(astronaut => {
      if (!passesFilters(astronaut, filters)) return;
      astronaut.degrees?.forEach(d => {
        if (!d.category) return;
        counts[d.category] = (counts[d.category] || 0) + 1;
      });
    });
  });
  return counts;
}

/**
 * Returns a map of { [ageRangeLabel]: count } bucketed by `bucketSize` years.
 * Labels look like "32–35". Astronauts missing `age_at_selection` are skipped.
 */
export function getAgeDistribution(filters = {}, bucketSize = 4) {
  const buckets = {};
  getGroupNames().forEach(name => {
    getGroup(name).astronauts.forEach(astronaut => {
      if (!passesFilters(astronaut, filters)) return;
      const age = astronaut.age_at_selection;
      if (!age) return;
      const bucket = Math.floor(age / bucketSize) * bucketSize;
      const label = `${bucket}–${bucket + bucketSize - 1}`;
      buckets[label] = (buckets[label] || 0) + 1;
    });
  });
  return buckets;
}
