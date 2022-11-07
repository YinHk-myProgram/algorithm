class Solution {
    public int[] twoSum(int[] nums, int target) {
        
        int[] twoSum = new int[2];
        Map<Integer, Integer>  map = new HashMap<>();
        for(int i=0; i<nums.length; i++) {
            if(map.containsKey(target-nums[i])) {
                twoSum[1] = i;
                twoSum[0] = map.get(target-nums[i]);
            }
            map.put(nums[i], i);
        }
        return twoSum;
    }
}

